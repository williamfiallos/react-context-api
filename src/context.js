import React from 'react';

const MyContext = React.createContext();

class MyProvider extends React.Component {
// when an object you will not want to mutate it; but if it's the state normally like string type or number, etc. then it wouldn't matter
    state = {
        currentUser: {
          firstName: "Sandra",
          course: "Web Dev",
          hoursToGo: 360
        }
      }
  
      addHoursPlease = () => {
        this.setState( prev => {
          return {
            currentUser: {
              ...prev.currentUser,
              hoursToGo: prev.currentUser.hoursToGo + 10
  
            }
          }
        })
      }

    // render will always be the same, while the above can always be changing
    render(){
        return (
            <MyContext.Provider value={{ 
                ...this.state,
                addHours: this.addHoursPlease
                }}>
                { this.props.children }
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };