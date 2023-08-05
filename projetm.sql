 CREATE TABLE bac (
    id INT AUTO_INCREMENT PRIMARY KEY,
     nom VARCHAR(255) NOT NULL
 );

 CREATE TABLE produit (
     id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    image MEDIUMBLOB,
    bac_id INT,
    FOREIGN KEY (bac_id) REFERENCES bac(id)
 );

