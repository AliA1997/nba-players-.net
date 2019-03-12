using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace Top25NBAPlayers.Domain
{
    public abstract class Entity 
    {
        public Guid Id { get; set; }
        public int Deleted_Ind { get; set; }
    }
}
