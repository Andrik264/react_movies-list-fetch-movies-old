(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"Title":"Inception","Plot":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbID":"tt1375666"},{"Title":"Love Actually","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","Poster":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbID":"tt0314331"},{"Title":"The Day After Tomorrow","Plot":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","Poster":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbID":"tt0319262"},{"Title":"Rogue One","Plot":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","Poster":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbID":"tt3748528"},{"Title":"The Holiday","Plot":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","Poster":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbID":"tt0457939"}]')},,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(6),l=a.n(c),o=(a(16),a(10)),s=a(1),r=(a(17),a(18),a(19),function(e){var t=e.Title,a=e.Plot,n=void 0===a?"":a,c=e.Poster;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:c,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},n,i.a.createElement("br",null))))}),m=function(e){var t=e.movies,a=void 0===t?[]:t;return i.a.createElement("div",{className:"movies"},a.map((function(e){return i.a.createElement(r,Object.assign({key:e.imdbID},e))})))},d=a(4),u=a.n(d),h=a(7),p=a(8),f=a.n(p),v=(a(21),function(e){var t=e.onAddMovie,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],o=c[1],m=Object(n.useState)(null),d=Object(s.a)(m,2),p=d[0],v=d[1],b=Object(n.useState)(!1),g=Object(s.a)(b,2),E=g[0],w=g[1],M=Object(n.useState)(!1),N=Object(s.a)(M,2),j=N[0],y=N[1];Object(n.useEffect)((function(){w(!1)}),[l]);var T=function(){var e=Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(!0),w(!1),fetch("".concat("https://www.omdbapi.com/?apikey=7272b996","&t=").concat(l)).then((function(e){return e.json()})).then((function(e){e.Error?w(!0):v(e)})).catch((function(e){throw w(!0),new Error(e)})).finally((function(){return y(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"find-movie"},i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:f()("input",{"is-danger":E}),value:l,onChange:function(e){return o(e.target.value)}})),E&&i.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title"),j&&i.a.createElement("p",{className:"help"},"Searching...")),i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-light","data-cy":"find",onClick:T},"Find a movie")),i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-primary","data-cy":"add",disabled:!p,onClick:function(){t(p),o("")}},"Add to the list")))),p&&i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"title"},"Preview"),i.a.createElement(r,p)))}),b=a(9),g=function(){var e=Object(n.useState)(b),t=Object(s.a)(e,2),a=t[0],c=t[1];return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(m,{movies:a})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(v,{onAddMovie:function(e){a.map((function(e){return e.imdbID})).includes(e.imdbID)||c([e].concat(Object(o.a)(a)))}})))};l.a.render(i.a.createElement(g,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.eb3e1a0a.chunk.js.map