import React from 'react';

const styles = {
  card: {
    width: "250px",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "white",
    padding: "10px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  title: { fontSize: "1.2rem", fontWeight: "bold" },
  text: { fontSize: "0.9rem", color: "gray" },
  price: { fontSize: "1rem", fontWeight: "bold", color: "#e63946" },
};

function DestinationCard({ name, location, image, description, price }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2 style={styles.title}>{name}</h2>
      <h4 style={styles.text}>{location}</h4>
      <p style={styles.text}>{description}</p>
      <p style={styles.price}>{price}</p>
    </div>
  );
}

export default DestinationCard;
