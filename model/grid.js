function Grid(width, height)
{ 
    this._matrix = [];
    this._hight = height;
    this._width = width;
    
    // Declate the 2nd dimention if needed
    for(var i =0;i<width;i++)
    {
        this._matrix[i] = new Array(height);
        
        for(var j=0;j<height;j++)
        {
            this._matrix[i][j] = new Cell();
        }
    }
    
    for(var y =0;y<height;y++)
    {
        for(var x = 0;x<width;x++)
        {
            var directionExistance = new Array();
            var newCell = this._matrix[x][y];
            
            // If there is upper
            if (y != 0)
            {
                directionExistance[DIRECTION.UP] = true;
                newCell.getNeighborCells()[DIRECTION.UP] = this._matrix[x][y-1];
            }
            
            // If there is down
            if (y != height-1)
            {
                directionExistance[DIRECTION.DOWN] = true;
                newCell.getNeighborCells()[DIRECTION.DOWN] = this._matrix[x][y+1];
            } 
            
            // if there is left
            if(x != 0)
            {
                directionExistance[DIRECTION.LEFT] = true;
                newCell.getNeighborCells()[DIRECTION.LEFT] = this._matrix[x-1][y];
            } 
            
            // if there is right
            if(x != width-1)
            {
                directionExistance[DIRECTION.RIGHT] = true;
                newCell.getNeighborCells()[DIRECTION.RIGHT] = this._matrix[x+1][y];
            }      
            
            // if there is up right
            if ( directionExistance[DIRECTION.UP] && directionExistance[DIRECTION.RIGHT])
            {
                directionExistance[DIRECTION.UP_RIGHT] = true;
                newCell.getNeighborCells()[DIRECTION.UP_RIGHT] = this._matrix[x+1][y-1];
            }    
            
            // if there is up left
            if ( directionExistance[DIRECTION.UP] && directionExistance[DIRECTION.LEFT])
            {
                directionExistance[DIRECTION.UP_LEFT] = true;
                newCell.getNeighborCells()[DIRECTION.UP_LEFT] = this._matrix[x-1][y-1];
            }  
            
            // if there is down left
            if ( directionExistance[DIRECTION.DOWN] && directionExistance[DIRECTION.LEFT])
            {
                directionExistance[DIRECTION.DOWN_LEFT] = true;
                newCell.getNeighborCells()[DIRECTION.DOWN_LEFT] = this._matrix[x-1][y+1];
            }
            
            // if there is down right
            if ( directionExistance[DIRECTION.DOWN] && directionExistance[DIRECTION.RIGHT])
            {
                directionExistance[DIRECTION.DOWN_RIGHT] = true;
                newCell.getNeighborCells()[DIRECTION.DOWN_RIGHT] = this._matrix[x+1][y+1];
            }                 
        }
    }
    
    this.foreachCell = function(func)
    {
        for(var j =0; j< this._hight; j++)
        {
            for(var i = 0;i < this._width; i++)
            {
                func(this._matrix[i][j],i,j);
            }
        }
    }
    
    this.getCellByCoordination = function(x,y)
    {
        return this._matrix[x][y];
    }
}