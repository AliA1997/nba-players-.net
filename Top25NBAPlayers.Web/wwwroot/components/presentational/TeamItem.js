import React, { useState } from 'react';
import { format } from 'date-fns';
import { Button, Card, Image, Icon, Modal, CardDescription } from 'semantic-ui-react';
import { notify } from 'react-notify-toast';
import * as utils from '../../utils';

const TeamItem = ({id, name, logo, greatestPlayer, deleted_Date, history, admin, permDelete}) => {

    const [ openDelete, openDeleteModal ] = useState(false);

    const [ openRestore, openRestoreModal ] = useState(false);

    
    async function deleteTeam(e) {
        
        e.preventDefault();
        //If the team is not already deleted then delete else permanently delete it
        const deleteTeamResult = !permDelete ?
                                    await fetch(`${utils.server}/teams/${id}`, { 
                                                                        method: 'DELETE', 
                                                                        mode: 'cors'        
                                                                    })
                                    : await fetch(`${utils.server}/teams/permanently_delete/${id}`, {
                                                                        method: 'DELETE',
                                                                        mode: 'cors'
                                                                     })
        
        if(deleteTeamResult.status === 200) {
            notify.show(`Team with an id of ${id} deleted!`, "success");
            openDeleteModal(false);
            
            history.push('/teams');

        } else {
            notify.show(`Error deleting team!`, "error");
            openDeleteModal(false);
        }
    }
    
    async function restoreTeam(e) {
        e.preventDefault();
        const restoreTeamResult = await fetch(`${utils.server}/teams/restore/${id}`, { method: 'PATCH', mode: 'cors'});

        if(restoreTeamResult.status === 200) {
            notify.show(`Team with an id of ${id} restored!`, "success");
            openRestoreModal(false);
        } else {
            notify.show(`Error restoring team!`, "error");
            openRestoreModal(false);
        }
        
        history.go();
        
    }

    function openTeamModal(e, bool, type) {
        e.preventDefault();
        if(type === 'delete')
            openDeleteModal(bool);
        else 
            openRestoreModal(bool);
    }

    return (
        <Card id="team-card">
            <Image src={logo} onClick={() => history.push(`/teams/${id}`)}/>
            <Card.Content onClick={() => history.push(`/teams/${id}`)}>
                <Card.Header as='h3'>
                    {name}
                </Card.Header>
                <Card.Description>
                    <Icon name="user" />
                    Greatest Player: {greatestPlayer}
                </Card.Description>

                {/*permDelete prop indicates that a team can be permanently deleted, which also indicates that it is already deleted. */}
                {/*If the team is already deleted and has a delete date that is not null then render the date deleted. */}
                {permDelete && deleted_Date ?
                    <Card.Description style={{color: 'red'}}>Date Deleted: {format(deleted_Date, 'MM/DD/YYYY')}</Card.Description>
                    : null}
            </Card.Content>

            {admin === true ?
                <Card.Content style={{height: '20%'}}>
                    <Button negative onClick={e => openTeamModal(e, true, 'delete')} content="Delete Team" style={{width: '100%'}}/>
                    {
                        //If the player is already deleted then have the ability to restore that player.
                        permDelete ?
                        <Button positive onClick={e => openTeamModal(e, true, 'restore')} content="Restore Team" style={{width: '100%'}} />
                        : null
                    }
                </Card.Content>
                : null
            }

            <Modal size="mini" open={openDelete} onClose={e => openTeamModal(e, false, 'delete')}>
                <Modal.Header>{permDelete ? 'Permanently delete this Team?' : 'Delete this Team?'}</Modal.Header>
                <Modal.Actions>
                    <Button negative onClick={e => openTeamModal(e, false, 'delete')}>No</Button>
                    <Button positive icon='checkmark' labelPosition='right' content={permDelete ? 'Yes never see this again.' : 'Delete' } onClick={async (e) => await deleteTeam(e)}/>
                </Modal.Actions>
            </Modal>

            <Modal size="mini" open={openRestore} onClose={e => openTeamModal(e, false, 'restore')}>
                <Modal.Header>{'Restore this Team?'}</Modal.Header>
                <Modal.Actions>
                    <Button negative onClick={e => openTeamModal(e, false, 'restore')}>No</Button>
                    <Button positive icon='checkmark' labelPosition='right' content= 'Restore' onClick={async (e) => await restoreTeam(e)}/>
                </Modal.Actions>
            </Modal>

        </Card>
    );
};

export default TeamItem;

