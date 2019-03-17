import React, { useState }  from 'react';
import { format } from 'date-fns';
import { notify } from 'react-notify-toast';
import { Button, Card, Image, Icon, Reveal, Modal } from 'semantic-ui-react';
import * as utils from '../../utils';

const placeholder = 'https://react.semantic-ui.com/images/wireframe/image.png';

const PlayerItem = ({id, name, avatar, jerseyNumber, team, deleted_Date, history, admin, permDelete}) => {

    const [ openDelete, openDeleteModal ] = useState(false);

    const [ openRestore, openRestoreModal ] = useState(false);


    async function deletePlayer(e) {
        
        e.preventDefault();

        //If the player is not already deleted then delete else permanently delete it
        const deletePlayerResult =  !permDelete ? 
                                        await fetch(`${utils.server}/players/${id}`, { 
                                                                        method: 'DELETE', 
                                                                        mode: 'cors'        
                                                                        })
                                        : await fetch(`${utils.server}/players/permanently_delete/${id}`, {
                                                                        method: 'DELETE',
                                                                        mode: 'cors'
                                                                        })

        if(deletePlayerResult.status === 200) {
            notify.show(`Player with an id of ${id} deleted!`, "success");
            openDeleteModal(false);
        
            history.push('/players');
        } else {
            notify.show('Error deleting player!', "error");
            openDeleteModal(false);
        }
    
    }

    async function restorePlayer(e) {

        e.preventDefault();
        const restoreTeamResult = await fetch(`${utils.server}/players/restore/${id}`, { method: 'PATCH', mode: 'cors'});

        if(restoreTeamResult.status === 200) {
            notify.show(`Player with an id of ${id} restored!`, "success");
            openRestoreModal(false);
        } else {
            notify.show(`Error restoring player!`, "error");
            openRestoreModal(false);
        } 
        
        history.push('/players');
        
    }

    function openPlayerModal(e, bool, type) {
        e.preventDefault();
        if(type === 'delete')
            openDeleteModal(bool);
        else
            openRestoreModal(bool);
    }


    return (
        <Card id="player-card">
            <Card.Header as="h3" onClick={() => history.push(`/players/${id}`)}>
                {name}
            </Card.Header>
            <Image src={avatar || placeholder} onClick={() => history.push(`/players/${id}`)}/>
            <Card.Content onClick={() => history.push(`/players/${id}`)}>
                <Card.Meta>
                    Jersey #: {jerseyNumber} 
                </Card.Meta>
                <Card.Meta>
                    <Icon name="attention" />
                    Team: {team}
                </Card.Meta>
                {/*permDelete prop indicates that a player can be permanently deleted, which also indicates that it is already deleted. */}
                {/*If the player is already deleted and has a delete date that is not null then render the date deleted. */}
                {permDelete && deleted_Date ?
                    <Card.Meta style={{color: 'red'}}>Date Deleted: {format(deleted_Date, 'MM/DD/YYYY')}</Card.Meta>
                    : null}
            
            </Card.Content>
            {admin === true ?
                <Card.Content style={{height: '20%'}}> 
                    <Button negative onClick={e => openPlayerModal(e, true, 'delete')} content="Delete Player" style={{width: '100%'}} />
                    {
                        //If the player is already deleted then have the ability to restore that player.
                        permDelete ?
                        <Button positive onClick={e => openPlayerModal(e, true, 'restore')} content="Restore Player" style={{width: '100%'}} />
                        : null
                    }
                </Card.Content>
                : null
            }

            <Modal size="mini" open={openDelete} onClose={e => openPlayerModal(e, false, 'delete')}>
                <Modal.Header>{permDelete ? 'Permanently delete this Player?' :  'Delete this Player?'}</Modal.Header>
                <Modal.Actions>
                    <Button negative onClick={e => openPlayerModal(e, false, 'delete')}>No</Button>
                    <Button positive icon='checkmark' labelPosition='right' content={permDelete ? 'Yes never see this again.' : 'Delete' } onClick={async (e) => await deletePlayer(e)}/>
                </Modal.Actions>
            </Modal>
            
            <Modal size="mini" open={openRestore} onClose={e => openPlayerModal(e, false, 'restore')}>
                <Modal.Header>{'Restore this Player?'}</Modal.Header>
                <Modal.Actions>
                    <Button negative onClick={e => openPlayerModal(e, false, 'restore')}>No</Button>
                    <Button positive icon='checkmark' labelPosition='right' content= 'Restore' onClick={async (e) => await restorePlayer(e)}/>
                </Modal.Actions>
            </Modal>
        </Card>

    );
};

export default PlayerItem;