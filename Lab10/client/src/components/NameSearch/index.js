import React from 'react';

class NameSearch extends React.Component {
    readName(event) {
        //stops the default action
        event.preventDefault();
                //finds the element with id name
                let element = document.querySelector("#name");

                fetch("/employees/" + element.value )
                .then((res) => {
                    //Parse the string into a JS object 
                    return res.json();
                })
                .then((processed) => {
                    //finds element with id reportingArea
                    let reporting = document.querySelector("#reportingArea");

                    if (processed.error) {
                        reporting.innerHTML = processed.error;
                    } else {
                        reporting.innerHTML = processed.age;
                    }
                });
                element.value= "";
            }
            render() {
                return(
                    <div>
                        <h2>Name</h2>
                        <form onSubmit={this.readName}>
                            <input id="name" type="text"/>
                            <button>Submit</button>

                        </form>
                    </div>
                )
            }

    }
    export default NameSearch;
