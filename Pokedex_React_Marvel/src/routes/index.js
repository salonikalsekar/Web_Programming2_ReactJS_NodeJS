import React, {Component} from "react";

class home extends Component {
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div>
                            <article>
                                {/* <img src={pok} className="k" alt="logo" /> */}
                                <h2>Pokemon</h2>
                                <p>Pokémon (Japanese: ポケモン Hepburn: Pokemon, Japanese: [pokemoɴ]; English: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/)[1][2][3] is a media franchise managed by The Pokémon Company, a Japanese consortium between Nintendo, Game Freak, and Creatures.[4] The franchise copyright is shared by all three companies, but Nintendo is the sole owner of the trademark.[5] The franchise was created by Satoshi Tajiri in 1995,[6] and is centered on fictional creatures called "Pokémon", which humans, known as Pokémon Trainers, catch and train to battle each other for sport.
The franchise began as a pair of video games for the original Game Boy that were developed by Game Freak and published by Nintendo. It now spans video games, trading card games, animated television shows and movies, comic books, and toys. Pokémon is the second best-selling video game franchise, behind only Nintendo's Mario franchise[7] and the highest-grossing media franchise of all time. The franchise is also represented in other Nintendo media, such as the Super Smash Bros. series.</p>

                                {/* <Route path={`/pokemon/page/0`} component={pokemons}/> */}

                            </article>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div>
                            <article>
                                {/* <img src={ber} className="kj" alt="logo" /> */}
                                <h2>Berries</h2>
                                <p>Berries (Japanese: きのみ Berries) are small, juicy, fleshy fruit. As in the real world, a large variety exists in the Pokémon world, with a large range of flavors, names, and effects. First found in the Generation II games, many Berries have since become critical held items in battle, where their various effects include HP and status condition restoration, stat enhancement, and even damage negation.
Berries were introduced in Generation II to take advantage of the then-new held items feature, which allows a Pokémon to hold and use specific items in battle. The standard Generation I items—such as Potions and Full Heals—are man-made, so Pokémon do not know how to use them if they hold these items. Instead, ten different Berries were created that Pokémon could use automatically during battle, with effects analogous to the man-made healing items.
These Berries have not appeared in media released after Generation II, having been replaced by a new set of Berries in Generation III. However, their basic effects are inherited by the first ten Berries introduced in Generation III. In Pokémon HeartGold and SoulSilver, the trees that held these Berries are replaced by Apricorn trees, which function similarly.
                                </p>

                            </article>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div>
                            <article>
                                {/* <img src={mach} className="kj" alt="logo" /> */}
                                <h2>Machines</h2>
                                <p>One major new addition to Pokemon Go in the latest massive update to the game is the technical machine / TM system – one major facet of the traditional Pokemon games that has been missing from Pokemon Go for quite a while now.

Technical Machines / TMs are items in the classic Pokemon games that teach Pokemon new moves, giving you more control over a Pokemon’s move set. Pokemon move lists and battles are of course streamlined in Pokemon Go, but with the addition of raid battles in this latest update controlling what moves your Pokemon has access to and its overall movelist has never been more important. TMs can help you to take care of this.

If you’ve never played a classic Pokemon game but are a Go addict these might be all new to you – and even Pokemon veterans will find they’re very different in Pokemon Go. Let’s get into why and how that is.</p>

                            </article>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;