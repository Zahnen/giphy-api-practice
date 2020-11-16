import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#searchButton').click (function() {
    const lookup = $('#searchBar').val();
    $('#searchBar').val("");
    console.log(lookup);

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${lookup}&limit=3&offset=0&rating=g&lang=en`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status ===200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGif1').show();
      $('.showGif1').html(`<img src=${response.data[0].images.original.url}>`);
      $('.showGif2').show();
      $('.showGif2').html(`<img src=${response.data[1].images.original.url}>`);
      $('.showGif3').show();
      $('.showGif3').html(`<img src=${response.data[2].images.original.url}>`);
    }
  });
  $('#trendingButton').click (function() {
    

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=3&rating=g`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status ===200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGif1').show();
      $('.showGif1').html(`<img src=${response.data[0].images.original.url}>`);
      $('.showGif2').show();
      $('.showGif2').html(`<img src=${response.data[1].images.original.url}>`);
      $('.showGif3').show();
      $('.showGif3').html(`<img src=${response.data[2].images.original.url}>`);
    }

  });

  $('#randomButton').click (function() {
    

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=g`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status ===200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGif1').show();
      $('.showGif1').html(`<img src=${response.data.images.original.url}>`);
    }
  });
});
