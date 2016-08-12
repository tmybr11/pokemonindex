(function() {

    var app = angular.module( "pokemon", [ ] );
    
    app.controller( "PokemonController", function() {
        
        this.pokemons = list;
        this.newPokemon = {};
        this.strongest = {};
        this.aux = 0;
        
        this.addPokemon = function() {
            
            this.pokemons.push( this.newPokemon );
            
            if( this.newPokemon.cp > this.aux ) {
             
                this.strongest = this.newPokemon;
                
            }
            
            this.newPokemon = {};
            
        };
        
    });
    
    var list = [];

})();