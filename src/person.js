import React from "react";
class Person extends React.Component {
  state = {
    fullname: "Mariama Ba",
    bio: "Mariama Bâ, née le 17 avril 1929 à Dakar, et morte dans la même ville le 17 août 1981, est une femme de lettres sénégalaise. Elle est issue d'une famille Lébou musulmane. Dans son œuvre, elle critique les inégalités entre hommes et femmes dues à la tradition africaine. Féministe, elle milite pour une meilleure prise en compte des questions féminines. Elle est notamment fondatrice et présidente du Cercle Fémina. Elle est membre de la Fédération des associations féminines du Sénégal1 (FAFS). Mais aussi de l’Amicale Germaine Legoff, regroupant toutes les anciennes normaliennes.",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxId48a1XX2hFf2aW0T0c7anv8WI4tAx02YYqGDpJa&s",
    profession: "Ecrivain",
    show: true,
  };

  render() {
    return (
      <>
      <div>
          <img style={{with:100 ,height:250 ,float:"left"}}src={this.state.imgSrc} alt="img-profile" />
        
      <h1 style={{textAlign:"center",fontSize:100}}>{this.state.fullname}</h1>
        <div style={{textAlign:"center",marginTop:0}}> <h2>{this.state.profession}</h2></div>
        <p style={{margin:30,fontSize:40}}>{this.state.bio}</p>
        </div>
      </>
    );
  }
}

export default Person;
