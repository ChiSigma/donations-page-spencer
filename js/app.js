/**
 * Created by alexmelagrano on 5/16/17.
 */


// Simple GET request to see pull the current fund total

// GitHub API endpoint: https://api.github.com/ ...

var main = function(){

    var reqUrl = "https://api.github.com/repos/ChiSigma/donations-page-spencer/contents/amount.txt?ref=master";

    $.ajax({
        url:reqUrl,
        dataType: "jsonp",
        success : function(data)
        {
            var amount = atob(data.data.content);
            console.log("here's the data");
            console.log(amount);
            console.log("and here's the specific amount, decoded");
            console.log(amount);
            $('#donation-amount').html('$' + amount);
        },
        error: function(response){
            console.log('An error occurred:');
            console.log(response);
        }
    });
};

$(document).ready(main);