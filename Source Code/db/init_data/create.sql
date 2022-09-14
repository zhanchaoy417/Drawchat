
DROP TABLE IF EXISTS Games CASCADE;
CREATE TABLE IF NOT EXISTS Games(
  GameCode INT PRIMARY KEY,
  UsersInGame VARCHAR(45),
  CurrentImage VARCHAR(45),
  ImageTimeStamp TIMESTAMP,
  Winner VARCHAR(45),
  GameStarted BOOLEAN DEFAULT '0',
  DrawingName VARCHAR(45)
);

DROP TABLE IF EXISTS Users CASCADE;
CREATE TABLE IF NOT EXISTS Users(
    UserID SERIAL PRIMARY KEY,
    GameCode INT,
    UserName VARCHAR(45),
    UserScore INT DEFAULT 0,
    HasDrawn BOOLEAN DEFAULT '0'
);