import React from "react";
import "./clock.css";

export default class Clock extends React.Component {
   render() {
       
      return (
         <div className="clock">
            <div class="clock">
               <div class="hours">
                  <div class="first">
                     <div class="number">0</div>
                  </div>
                  <div class="second">
                     <div class="number">0</div>
                  </div>
               </div>
               <div class="tick">:</div>
               <div class="minutes">
                  <div class="first">
                     <div class="number">0</div>
                  </div>
                  <div class="second">
                     <div class="number">0</div>
                  </div>
               </div>
               <div class="tick">:</div>
               <div class="seconds">
                  <div class="first">
                     <div class="number">0</div>
                  </div>
                  <div class="second infinite">
                     <div class="number">0</div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
