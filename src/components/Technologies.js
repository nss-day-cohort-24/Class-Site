import React, { Component } from 'react';
import './Technologies.css';

class Technologies extends Component{

getTech () {
    fetch({
            url: "./src/tech.json"
        }).done(tech)
            .fail(function (error) {
            console.log("error", error);
            });
        
        function tech(tech) {
            console.log('did we make');
            // data.forEach(function (item) {
            //     `<div class="col-sm-3 technologies">
            //     <center><a href="${item.link}" target="_blank"><img class="techs" src="${item.image}" alt="${item.name}" data-toggle="tooltip" data-placement="top" title="${item.name}"></a><br>
            //     </center>
            //     </div>`;
            // });
        };
}

    render(){
        return(
            <div>
                <h2 className="heading text-center">Technologies Used</h2>
            </div>
        );
    }
}

export default Technologies;