function Cell()
{
    this._status = STATUS.DEAD;
    this._nextStatus = STATUS.DEAD;
    this._neighborCells = new Array();
    
    this.getNeighborCells = function()
    {
        return this._neighborCells;
    }
    
    this.isAlive = function()
    {
        return (this._status == STATUS.ALIVE);
    }
    
    this.getNeigborLivingCellsCount = function()
    {
        var counter = 0;
        
        for(var i = 0; i< Object.keys(this._neighborCells).length; i++)
        {
            var key = Object.keys(this._neighborCells)[i];
            
            if(this._neighborCells[key].isAlive())
            {
                counter++;
            }
        }
        
        return counter;
    } 
    
    this.calculateNextStatus = function()
    {
        var neighborCount = this.getNeigborLivingCellsCount();
        
        if (this._status == STATUS.ALIVE && neighborCount < 2)
        {
           this._nextStatus = STATUS.DYING_1; 
           return;
        }
        
        if (this._status == STATUS.ALIVE && neighborCount >= 2 && neighborCount <=3)
        {
           this._nextStatus = STATUS.ALIVE; 
           return;
        }
        
        if (this._status == STATUS.ALIVE && neighborCount > 3)
        {
           this._nextStatus = STATUS.DYING_1; 
           return;
        }
        
        if (this._status != STATUS.ALIVE && neighborCount == 3)
        {
           this._nextStatus = STATUS.ALIVE; 
           return;
        }
        
        // You die only once
        if(this._status == STATUS.DYING_3)
        {
            this._nextStatus = STATUS.DEAD;
            return;
        }
        
        if(this._status == STATUS.DYING_2)
        {
            this._nextStatus = STATUS.DYING_3;
            return;
        }
        
        if(this._status == STATUS.DYING_1)
        {
            this._nextStatus = STATUS.DYING_2;
            return;
        }
    }
    
    this.commitNextStatus = function()
    {
        this._status = this._nextStatus;
        this._nextStatus = STATUS.DEAD;
    }
    
    this.toggleAliveness = function()
    {
        if(this._status == STATUS.ALIVE)
        {
            this._status = STATUS.DEAD;
        }
        else if (this._status != STATUS.ALIVE)
        {
            this._status = STATUS.ALIVE;
        }
    }
    
    this.setLivingStatus = function(status)
    {
        this._status = status;
    }
    
    this.getLivingStatus = function()
    {
        return this._status; 
    }
}