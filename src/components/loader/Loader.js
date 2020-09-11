import React from "react";

/*
https://lmgtfy.com/?q=react+loading+spinner+components
There are many more on the web use one of these or create your own!
*/

export const Loader = () => 
<>
    <div class="ui segment">
    <p>...loading</p>
    <div class="ui active dimmer">
    <div class="ui loader"></div>
    </div>
    </div>
</>;
