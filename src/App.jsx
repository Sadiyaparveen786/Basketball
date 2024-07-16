import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';
import AdditionalContent from './AdditionalContent';
import './App.css';

const App = () => {
  const player = {
    name: "Michael Jordan",
    image: 'https://cdn.bleacherreport.net/images_root/slides/photos/000/811/105/72378841_original.jpg?1301093814https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-B2XKfk90BQBplsrZmx_wwtCCF71x74nBa10VatNvStQG4IRP87LPxI2DzVuuk5_LsnU',
    position: "Center",
    stats: {
      pointsPerGame: 19.9,
      assistsPerGame: 5.4,
      reboundsPerGame: 6.7,
    }
  };

  return (
    <div className="App">
      <div className="content-container">
        <BasketballPlayerCard 
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
        <AdditionalContent />
      </div>
    </div>
  );
};

export default App;
