CREATE TABLE IF NOT EXISTS potato (
  idPotato INTEGER constraint pk_potato primary key,
  desPotato TEXT
);
CREATE TABLE IF NOT EXISTS carrot (
  idCarrot INTEGER constraint pk_carrot primary key,
  idPotato INTEGER,
  desCarrot TEXT,
  CONSTRAINT fk_potatoCarrot FOREIGN KEY (idPotato) REFERENCES potato(idPotato)
);
