var STATUS = {
  ALIVE : 1,
  DEAD: 0,
  DYING_1: 2,
  DYING_2: 3,
  DYING_3: 4
};

function SWITCH_STATUS(status)
{
    if (status == STATUS.ALIVE)
    {
        return STATUS.DEAD;   
    }
    else if (status == STATUS.DEAD)
    {
        return STATUS.ALIVE;
    }
}


var DIRECTION = {
    UP : 0,
    UP_RIGHT : 1,
    RIGHT : 2,
    DOWN_RIGHT : 3,
    DOWN : 4,
    DOWN_LEFT : 5,
    LEFT : 6,
    LEFT_UP : 7
};

var GAME_STATUS = {
    PLAY: 1,
    STOP: 0
}
