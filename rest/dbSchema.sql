CREATE TABLE IF NOT EXISTS potato ( 
id INTEGER IDENTITY  constraint pk_potato primary key, 
des TEXT 
); 
CREATE TABLE IF NOT EXISTS carrot ( 
id INTEGER IDENTITY  constraint pk_carrot primary key, 
des TEXT,
idPotato int constrait fk_potatoCarrot foreign key reference (potato.id)
); 
