//ESTE ARCHIVO NO SE USA EN LA APP, SOLO EN ETAPA DE PRODUCCION

//endpoint de la api me da por resultado un objeto -> yo necesito el array de objetos RESULTS
const apiVideogames = {
    "count": 12,
    "next": null,
    "previous": null,
    "results": [ //data.results ??
        {
            "name": "Children of Morta",
            "platforms": [
                {
                    "platform": {
                        //"id": 4,
                        "name": "PC",
                        //"slug": "pc"
                    }
                },
                {
                    "platform": {
                        //"id": 1,
                        "name": "Xbox One",
                        //"slug": "xbox-one"
                    }
                },
                {
                    "platform": {
                        //"id": 18,
                        "name": "PlayStation 4",
                        //"slug": "playstation4"
                    }
                },
                {
                    "platform": {
                        //"id": 7,
                        "name": "Nintendo Switch",
                        //"slug": "nintendo-switch"
                    }
                },
                {
                    "platform": {
                        //"id": 5,
                        "name": "macOS",
                        //"slug": "macos"
                    }
                },
                {
                    "platform": {
                        //"id": 6,
                        "name": "Linux",
                        //"slug": "linux"
                    }
                }
            ],
            "released": "2019-09-03",
            "background_image": "https://media.rawg.io/media/games/434/43431e04f0cd5419a3d8e31a5c8c3d5d.jpg",
            "rating": 3.91,
            "genres": [
                {
                    "id": 51,
                    "name": "Indie",
                    "slug": "indie"
                },
                {
                    "id": 3,
                    "name": "Adventure",
                    "slug": "adventure"
                },
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action"
                },
                {
                    "id": 5,
                    "name": "RPG",
                    "slug": "role-playing-games-rpg"
                }
            ]
        },
        {
            "slug": "catherine-full-body",
            "name": "Catherine: Full Body",
            "playtime": 0,
            "platforms": [
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo Switch",
                        "slug": "nintendo-switch"
                    }
                },
                {
                    "platform": {
                        "id": 19,
                        "name": "PS Vita",
                        "slug": "ps-vita"
                    }
                }
            ],
            "stores": [
                {
                    "store": {
                        "id": 3,
                        "name": "PlayStation Store",
                        "slug": "playstation-store"
                    }
                },
                {
                    "store": {
                        "id": 6,
                        "name": "Nintendo Store",
                        "slug": "nintendo"
                    }
                }
            ],
            "released": "2019-09-03",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/f55/f5532538a538a505204fd4f3f2b19c1c.jpg",
            "rating": 4.15,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 67,
                    "percent": 42.95
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 65,
                    "percent": 41.67
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 15,
                    "percent": 9.62
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 9,
                    "percent": 5.77
                }
            ],
            "ratings_count": 155,
            "reviews_text_count": 1,
            "added": 951,
            "added_by_status": {
                "yet": 88,
                "owned": 410,
                "beaten": 136,
                "toplay": 252,
                "dropped": 34,
                "playing": 31
            },
            "metacritic": 80,
            "suggestions_count": 376,
            "updated": "2023-10-03T13:30:10",
            "id": 244694,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 31,
                    "name": "Singleplayer",
                    "slug": "singleplayer",
                    "language": "eng",
                    "games_count": 210696,
                    "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                },
                {
                    "id": 7,
                    "name": "Multiplayer",
                    "slug": "multiplayer",
                    "language": "eng",
                    "games_count": 35880,
                    "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                },
                {
                    "id": 13,
                    "name": "Atmospheric",
                    "slug": "atmospheric",
                    "language": "eng",
                    "games_count": 30589,
                    "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                },
                {
                    "id": 42,
                    "name": "Great Soundtrack",
                    "slug": "great-soundtrack",
                    "language": "eng",
                    "games_count": 3254,
                    "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                },
                {
                    "id": 24,
                    "name": "RPG",
                    "slug": "rpg",
                    "language": "eng",
                    "games_count": 18312,
                    "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                },
                {
                    "id": 118,
                    "name": "Story Rich",
                    "slug": "story-rich",
                    "language": "eng",
                    "games_count": 19225,
                    "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                },
                {
                    "id": 16,
                    "name": "Horror",
                    "slug": "horror",
                    "language": "eng",
                    "games_count": 42574,
                    "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                },
                {
                    "id": 26,
                    "name": "Gore",
                    "slug": "gore",
                    "language": "eng",
                    "games_count": 5213,
                    "image_background": "https://media.rawg.io/media/games/744/744adc36e6573dd67a0cb0e373738d19.jpg"
                },
                {
                    "id": 49,
                    "name": "Difficult",
                    "slug": "difficult",
                    "language": "eng",
                    "games_count": 12661,
                    "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                },
                {
                    "id": 34,
                    "name": "Violent",
                    "slug": "violent",
                    "language": "eng",
                    "games_count": 6097,
                    "image_background": "https://media.rawg.io/media/games/fba/fbae1bcfae1feffda6a11fbc1c939420.jpg"
                },
                {
                    "id": 69,
                    "name": "Action-Adventure",
                    "slug": "action-adventure",
                    "language": "eng",
                    "games_count": 14365,
                    "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
                },
                {
                    "id": 134,
                    "name": "Anime",
                    "slug": "anime",
                    "language": "eng",
                    "games_count": 11654,
                    "image_background": "https://media.rawg.io/media/games/3ea/3ea0e57ede873970c0f1130e30d88749.jpg"
                },
                {
                    "id": 110,
                    "name": "Cinematic",
                    "slug": "cinematic",
                    "language": "eng",
                    "games_count": 1620,
                    "image_background": "https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg"
                },
                {
                    "id": 50,
                    "name": "Sexual Content",
                    "slug": "sexual-content",
                    "language": "eng",
                    "games_count": 5053,
                    "image_background": "https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg"
                },
                {
                    "id": 83,
                    "name": "Puzzle-Platformer",
                    "slug": "puzzle-platformer",
                    "language": "eng",
                    "games_count": 9498,
                    "image_background": "https://media.rawg.io/media/screenshots/ddb/ddbcf3f1330e146094b0ce211e33090a.jpg"
                },
                {
                    "id": 9449,
                    "name": "interactive-movie",
                    "slug": "interactive-movie",
                    "language": "eng",
                    "games_count": 6,
                    "image_background": "https://media.rawg.io/media/games/a91/a917f41bb87e4b9e7a762ac87d97a9dc.jpg"
                },
                {
                    "id": 28220,
                    "name": "japanese-style",
                    "slug": "japanese-style",
                    "language": "eng",
                    "games_count": 6,
                    "image_background": "https://media.rawg.io/media/screenshots/7f5/7f527a7f3585c98478d3fe5fd7a80d63.jpg"
                }
            ],
            "esrb_rating": {
                "id": 4,
                "name": "Mature",
                "slug": "mature",
                "name_en": "Mature",
                "name_ru": "С 17 лет"
            },
            "user_game": null,
            "reviews_count": 156,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/f55/f5532538a538a505204fd4f3f2b19c1c.jpg"
                },
                {
                    "id": 1643865,
                    "image": "https://media.rawg.io/media/screenshots/6ec/6ec39478abd9556bc50c68c3431462ec.jpg"
                },
                {
                    "id": 1643867,
                    "image": "https://media.rawg.io/media/screenshots/ac1/ac15703f2cbdac796c3289384d88e021.jpg"
                },
                {
                    "id": 1643869,
                    "image": "https://media.rawg.io/media/screenshots/8a9/8a940ead72672ea41382b1fb2def9a86.jpg"
                },
                {
                    "id": 1643871,
                    "image": "https://media.rawg.io/media/screenshots/a9f/a9fe7cde62861cece285ceaf6df1b0b9.jpg"
                },
                {
                    "id": 1643873,
                    "image": "https://media.rawg.io/media/screenshots/549/5496aad98eb4d8e3fb2a187b0928232a.jpg"
                },
                {
                    "id": 1643874,
                    "image": "https://media.rawg.io/media/screenshots/c20/c20fa5b0e7b74cdf5ab41c479c2ac23e.jpg"
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 2,
                        "name": "PlayStation",
                        "slug": "playstation"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo",
                        "slug": "nintendo"
                    }
                }
            ],
            "genres": [
                {
                    "id": 3,
                    "name": "Adventure",
                    "slug": "adventure"
                },
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action"
                },
                {
                    "id": 5,
                    "name": "RPG",
                    "slug": "role-playing-games-rpg"
                },
                {
                    "id": 7,
                    "name": "Puzzle",
                    "slug": "puzzle"
                }
            ]
        },
        {
            "slug": "final-fantasy-viii-remastered",
            "name": "Final Fantasy VIII Remastered",
            "playtime": 3,
            "platforms": [
                {
                    "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one"
                    }
                },
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo Switch",
                        "slug": "nintendo-switch"
                    }
                },
                {
                    "platform": {
                        "id": 3,
                        "name": "iOS",
                        "slug": "ios"
                    }
                }
            ],
            "stores": [
                {
                    "store": {
                        "id": 1,
                        "name": "Steam",
                        "slug": "steam"
                    }
                },
                {
                    "store": {
                        "id": 3,
                        "name": "PlayStation Store",
                        "slug": "playstation-store"
                    }
                },
                {
                    "store": {
                        "id": 2,
                        "name": "Xbox Store",
                        "slug": "xbox-store"
                    }
                },
                {
                    "store": {
                        "id": 4,
                        "name": "App Store",
                        "slug": "apple-appstore"
                    }
                },
                {
                    "store": {
                        "id": 6,
                        "name": "Nintendo Store",
                        "slug": "nintendo"
                    }
                },
                {
                    "store": {
                        "id": 8,
                        "name": "Google Play",
                        "slug": "google-play"
                    }
                }
            ],
            "released": "2019-09-03",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/1ac/1ac050b86c87138ce6a3354aa90db894.jpg",
            "rating": 4.18,
            "rating_top": 5,
            "ratings": [
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 48,
                    "percent": 50.0
                },
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 31,
                    "percent": 32.29
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 10,
                    "percent": 10.42
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 7,
                    "percent": 7.29
                }
            ],
            "ratings_count": 95,
            "reviews_text_count": 1,
            "added": 824,
            "added_by_status": {
                "yet": 73,
                "owned": 505,
                "beaten": 81,
                "toplay": 120,
                "dropped": 20,
                "playing": 25
            },
            "metacritic": 79,
            "suggestions_count": 363,
            "updated": "2023-09-20T03:52:54",
            "id": 327232,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 31,
                    "name": "Singleplayer",
                    "slug": "singleplayer",
                    "language": "eng",
                    "games_count": 210696,
                    "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                },
                {
                    "id": 42396,
                    "name": "Для одного игрока",
                    "slug": "dlia-odnogo-igroka",
                    "language": "rus",
                    "games_count": 38534,
                    "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                },
                {
                    "id": 42392,
                    "name": "Приключение",
                    "slug": "prikliuchenie",
                    "language": "rus",
                    "games_count": 32217,
                    "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                },
                {
                    "id": 40847,
                    "name": "Steam Achievements",
                    "slug": "steam-achievements",
                    "language": "eng",
                    "games_count": 32586,
                    "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
                },
                {
                    "id": 40836,
                    "name": "Full controller support",
                    "slug": "full-controller-support",
                    "language": "eng",
                    "games_count": 15343,
                    "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                },
                {
                    "id": 40849,
                    "name": "Steam Cloud",
                    "slug": "steam-cloud",
                    "language": "eng",
                    "games_count": 15262,
                    "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                },
                {
                    "id": 42,
                    "name": "Great Soundtrack",
                    "slug": "great-soundtrack",
                    "language": "eng",
                    "games_count": 3254,
                    "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                },
                {
                    "id": 24,
                    "name": "RPG",
                    "slug": "rpg",
                    "language": "eng",
                    "games_count": 18312,
                    "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                },
                {
                    "id": 42412,
                    "name": "Ролевая игра",
                    "slug": "rolevaia-igra",
                    "language": "rus",
                    "games_count": 14716,
                    "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
                },
                {
                    "id": 118,
                    "name": "Story Rich",
                    "slug": "story-rich",
                    "language": "eng",
                    "games_count": 19225,
                    "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                },
                {
                    "id": 64,
                    "name": "Fantasy",
                    "slug": "fantasy",
                    "language": "eng",
                    "games_count": 25471,
                    "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
                },
                {
                    "id": 42461,
                    "name": "Классика",
                    "slug": "klassika",
                    "language": "rus",
                    "games_count": 1398,
                    "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
                },
                {
                    "id": 193,
                    "name": "Classic",
                    "slug": "classic",
                    "language": "eng",
                    "games_count": 1733,
                    "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
                },
                {
                    "id": 134,
                    "name": "Anime",
                    "slug": "anime",
                    "language": "eng",
                    "games_count": 11654,
                    "image_background": "https://media.rawg.io/media/games/3ea/3ea0e57ede873970c0f1130e30d88749.jpg"
                },
                {
                    "id": 42407,
                    "name": "Аниме",
                    "slug": "anime-2",
                    "language": "rus",
                    "games_count": 7544,
                    "image_background": "https://media.rawg.io/media/games/67a/67aef58e8ead90609f7adbd20d72a033.jpg"
                },
                {
                    "id": 468,
                    "name": "role-playing",
                    "slug": "role-playing",
                    "language": "eng",
                    "games_count": 1531,
                    "image_background": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
                },
                {
                    "id": 40937,
                    "name": "Steam Trading Cards",
                    "slug": "steam-trading-cards-2",
                    "language": "eng",
                    "games_count": 481,
                    "image_background": "https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg"
                },
                {
                    "id": 233,
                    "name": "JRPG",
                    "slug": "jrpg",
                    "language": "eng",
                    "games_count": 3777,
                    "image_background": "https://media.rawg.io/media/games/5bf/5bfd0687ade6e8b55ace9c7fbc0991ea.jpg"
                },
                {
                    "id": 42514,
                    "name": "Японская ролевая игра",
                    "slug": "iaponskaia-rolevaia-igra",
                    "language": "rus",
                    "games_count": 2106,
                    "image_background": "https://media.rawg.io/media/screenshots/515/515e8cda2f9e3ea1ca2785e99c1a1893.jpg"
                },
                {
                    "id": 284,
                    "name": "Cult Classic",
                    "slug": "cult-classic",
                    "language": "eng",
                    "games_count": 969,
                    "image_background": "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg"
                },
                {
                    "id": 4698,
                    "name": "remastered",
                    "slug": "remastered",
                    "language": "eng",
                    "games_count": 15,
                    "image_background": "https://media.rawg.io/media/screenshots/06b/06b00e7f1cea97c004619c071e52f5b5.jpg"
                }
            ],
            "esrb_rating": {
                "id": 3,
                "name": "Teen",
                "slug": "teen",
                "name_en": "Teen",
                "name_ru": "С 13 лет"
            },
            "user_game": null,
            "reviews_count": 96,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/1ac/1ac050b86c87138ce6a3354aa90db894.jpg"
                },
                {
                    "id": 2140757,
                    "image": "https://media.rawg.io/media/screenshots/922/922b8d0bd9d5c995cc7be4af00d8a759.jpg"
                },
                {
                    "id": 2140758,
                    "image": "https://media.rawg.io/media/screenshots/c8d/c8dac0934447e3cd1a67953cb8380ca4.jpg"
                },
                {
                    "id": 2140759,
                    "image": "https://media.rawg.io/media/screenshots/ead/ead02432e1304a7412b164ef060ef2e0.jpg"
                },
                {
                    "id": 2140760,
                    "image": "https://media.rawg.io/media/screenshots/d72/d72a51a8a18408860cd7afa5317ce29e.jpg"
                },
                {
                    "id": 2140761,
                    "image": "https://media.rawg.io/media/screenshots/8f7/8f78003df1a85c4d7d303dd3da6f22ac.jpg"
                },
                {
                    "id": 2140762,
                    "image": "https://media.rawg.io/media/screenshots/5cf/5cf3fad73216987db469053a2f10aac0.jpg"
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 1,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 2,
                        "name": "PlayStation",
                        "slug": "playstation"
                    }
                },
                {
                    "platform": {
                        "id": 3,
                        "name": "Xbox",
                        "slug": "xbox"
                    }
                },
                {
                    "platform": {
                        "id": 4,
                        "name": "iOS",
                        "slug": "ios"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo",
                        "slug": "nintendo"
                    }
                }
            ],
            "genres": [
                {
                    "id": 3,
                    "name": "Adventure",
                    "slug": "adventure"
                },
                {
                    "id": 5,
                    "name": "RPG",
                    "slug": "role-playing-games-rpg"
                }
            ]
        },
        {
            "slug": "inbento",
            "name": "inbento",
            "playtime": 1,
            "platforms": [
                {
                    "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo Switch",
                        "slug": "nintendo-switch"
                    }
                },
                {
                    "platform": {
                        "id": 3,
                        "name": "iOS",
                        "slug": "ios"
                    }
                },
                {
                    "platform": {
                        "id": 5,
                        "name": "macOS",
                        "slug": "macos"
                    }
                }
            ],
            "stores": [
                {
                    "store": {
                        "id": 1,
                        "name": "Steam",
                        "slug": "steam"
                    }
                },
                {
                    "store": {
                        "id": 2,
                        "name": "Xbox Store",
                        "slug": "xbox-store"
                    }
                },
                {
                    "store": {
                        "id": 4,
                        "name": "App Store",
                        "slug": "apple-appstore"
                    }
                },
                {
                    "store": {
                        "id": 5,
                        "name": "GOG",
                        "slug": "gog"
                    }
                },
                {
                    "store": {
                        "id": 6,
                        "name": "Nintendo Store",
                        "slug": "nintendo"
                    }
                }
            ],
            "released": "2019-09-02",
            "tba": false,
            "background_image": "https://media.rawg.io/media/screenshots/9ab/9ab269a8afafacb256b40485d516fb2a.jpg",
            "rating": 3.83,
            "rating_top": 4,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 3,
                    "percent": 50.0
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 2,
                    "percent": 33.33
                },
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 1,
                    "percent": 16.67
                }
            ],
            "ratings_count": 6,
            "reviews_text_count": 0,
            "added": 58,
            "added_by_status": {
                "yet": 5,
                "owned": 38,
                "beaten": 8,
                "toplay": 4,
                "dropped": 2,
                "playing": 1
            },
            "metacritic": null,
            "suggestions_count": 44,
            "updated": "2023-11-01T08:35:11",
            "id": 359798,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 31,
                    "name": "Singleplayer",
                    "slug": "singleplayer",
                    "language": "eng",
                    "games_count": 210696,
                    "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                },
                {
                    "id": 42396,
                    "name": "Для одного игрока",
                    "slug": "dlia-odnogo-igroka",
                    "language": "rus",
                    "games_count": 38534,
                    "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                },
                {
                    "id": 40847,
                    "name": "Steam Achievements",
                    "slug": "steam-achievements",
                    "language": "eng",
                    "games_count": 32586,
                    "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
                },
                {
                    "id": 42398,
                    "name": "Инди",
                    "slug": "indi-2",
                    "language": "rus",
                    "games_count": 48127,
                    "image_background": "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg"
                },
                {
                    "id": 40836,
                    "name": "Full controller support",
                    "slug": "full-controller-support",
                    "language": "eng",
                    "games_count": 15343,
                    "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                },
                {
                    "id": 40849,
                    "name": "Steam Cloud",
                    "slug": "steam-cloud",
                    "language": "eng",
                    "games_count": 15262,
                    "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
                },
                {
                    "id": 42399,
                    "name": "Казуальная игра",
                    "slug": "kazualnaia-igra",
                    "language": "rus",
                    "games_count": 34065,
                    "image_background": "https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg"
                },
                {
                    "id": 45,
                    "name": "2D",
                    "slug": "2d",
                    "language": "eng",
                    "games_count": 189995,
                    "image_background": "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg"
                },
                {
                    "id": 42465,
                    "name": "Головоломка",
                    "slug": "golovolomka",
                    "language": "rus",
                    "games_count": 12611,
                    "image_background": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg"
                },
                {
                    "id": 42562,
                    "name": "Для всей семьи",
                    "slug": "dlia-vsei-semi",
                    "language": "rus",
                    "games_count": 6188,
                    "image_background": "https://media.rawg.io/media/games/d11/d11470677a829e34562e95a4002c2c7f.jpg"
                },
                {
                    "id": 42586,
                    "name": "Милая",
                    "slug": "milaia",
                    "language": "rus",
                    "games_count": 9638,
                    "image_background": "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png"
                },
                {
                    "id": 107,
                    "name": "Family Friendly",
                    "slug": "family-friendly",
                    "language": "eng",
                    "games_count": 5896,
                    "image_background": "https://media.rawg.io/media/screenshots/054/054bf49d9e736edfda5aa8e9015faf9b.jpeg"
                },
                {
                    "id": 42601,
                    "name": "Цветастая",
                    "slug": "tsvetastaia",
                    "language": "rus",
                    "games_count": 10555,
                    "image_background": "https://media.rawg.io/media/screenshots/0f5/0f585fa72f534f62f9e5da051179f5de.jpg"
                },
                {
                    "id": 88,
                    "name": "Cute",
                    "slug": "cute",
                    "language": "eng",
                    "games_count": 30595,
                    "image_background": "https://media.rawg.io/media/games/51c/51c430f1795c79b78f863a9f22dc422d.jpg"
                },
                {
                    "id": 165,
                    "name": "Colorful",
                    "slug": "colorful",
                    "language": "eng",
                    "games_count": 19132,
                    "image_background": "https://media.rawg.io/media/screenshots/46a/46ac84997152eaf4f760257a60099231.jpg"
                },
                {
                    "id": 42564,
                    "name": "Расслабляющая",
                    "slug": "rasslabliaiushchaia",
                    "language": "rus",
                    "games_count": 6862,
                    "image_background": "https://media.rawg.io/media/screenshots/0f5/0f585fa72f534f62f9e5da051179f5de.jpg"
                },
                {
                    "id": 138,
                    "name": "Relaxing",
                    "slug": "relaxing",
                    "language": "eng",
                    "games_count": 14570,
                    "image_background": "https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg"
                },
                {
                    "id": 305,
                    "name": "Linear",
                    "slug": "linear",
                    "language": "eng",
                    "games_count": 4582,
                    "image_background": "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg"
                },
                {
                    "id": 42691,
                    "name": "Эмоциональная",
                    "slug": "emotsionalnaia",
                    "language": "rus",
                    "games_count": 2009,
                    "image_background": "https://media.rawg.io/media/games/98c/98c87b286cd2a2ba942167df384a9bd3.jpg"
                },
                {
                    "id": 42437,
                    "name": "Линейная",
                    "slug": "lineinaia",
                    "language": "rus",
                    "games_count": 4526,
                    "image_background": "https://media.rawg.io/media/games/eb2/eb24800b4491701eca481e7c990bce4a.jpg"
                },
                {
                    "id": 200,
                    "name": "Narration",
                    "slug": "narration",
                    "language": "eng",
                    "games_count": 1637,
                    "image_background": "https://media.rawg.io/media/games/37a/37a9536e92cf8fe3b60045aa75dbd41f.jpg"
                },
                {
                    "id": 42582,
                    "name": "Минимализм",
                    "slug": "minimalizm",
                    "language": "rus",
                    "games_count": 4110,
                    "image_background": "https://media.rawg.io/media/screenshots/df4/df47a9df698c2c5b40de17e80f2f5ae0.jpeg"
                },
                {
                    "id": 179,
                    "name": "Cartoon",
                    "slug": "cartoon",
                    "language": "eng",
                    "games_count": 5006,
                    "image_background": "https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg"
                },
                {
                    "id": 112,
                    "name": "Minimalist",
                    "slug": "minimalist",
                    "language": "eng",
                    "games_count": 14121,
                    "image_background": "https://media.rawg.io/media/screenshots/2f2/2f2958ae87ac35e3442f3c87424a09b2.jpg"
                },
                {
                    "id": 572,
                    "name": "Emotional",
                    "slug": "emotional",
                    "language": "eng",
                    "games_count": 2121,
                    "image_background": "https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg"
                },
                {
                    "id": 162,
                    "name": "Board Game",
                    "slug": "board-game",
                    "language": "eng",
                    "games_count": 3513,
                    "image_background": "https://media.rawg.io/media/screenshots/b00/b00b7cc04dd09531b631ea4575696276.jpg"
                },
                {
                    "id": 42534,
                    "name": "Мультфильм",
                    "slug": "multfilm",
                    "language": "rus",
                    "games_count": 1080,
                    "image_background": "https://media.rawg.io/media/screenshots/fa1/fa1a7c3a3291dc71f01b8b77460c9be0.jpg"
                },
                {
                    "id": 2590,
                    "name": "fun",
                    "slug": "fun",
                    "language": "eng",
                    "games_count": 29135,
                    "image_background": "https://media.rawg.io/media/screenshots/f0d/f0da831778e57b58636ccaf20a7cc6e6.jpg"
                },
                {
                    "id": 626,
                    "name": "cats",
                    "slug": "cats",
                    "language": "eng",
                    "games_count": 5775,
                    "image_background": "https://media.rawg.io/media/screenshots/d7b/d7b995cad5c6e2bcc5ef87f9c89355e8.jpg"
                },
                {
                    "id": 59333,
                    "name": "Повествовательная",
                    "slug": "povestvovatelnaia",
                    "language": "rus",
                    "games_count": 1189,
                    "image_background": "https://media.rawg.io/media/games/771/77147800b4b3c72c0abfdc8610559e40.jpg"
                },
                {
                    "id": 2528,
                    "name": "brain",
                    "slug": "brain",
                    "language": "eng",
                    "games_count": 4188,
                    "image_background": "https://media.rawg.io/media/screenshots/0a2/0a2085ed3bc671519644f71c9d797ebf.jpg"
                },
                {
                    "id": 20047,
                    "name": "lifestyle",
                    "slug": "lifestyle",
                    "language": "eng",
                    "games_count": 169,
                    "image_background": "https://media.rawg.io/media/screenshots/50b/50b96fce25b0f592775e46e4adceb086.jpg"
                },
                {
                    "id": 161,
                    "name": "Golf",
                    "slug": "golf",
                    "language": "eng",
                    "games_count": 1734,
                    "image_background": "https://media.rawg.io/media/screenshots/e79/e79f94288af969b9bedc9cdea456eb4b.jpg"
                },
                {
                    "id": 58268,
                    "name": "Котики",
                    "slug": "kotiki",
                    "language": "eng",
                    "games_count": 619,
                    "image_background": "https://media.rawg.io/media/screenshots/e6a/e6ac159c45652165ffc986b73cc103b3.jpg"
                },
                {
                    "id": 666,
                    "name": "cooking",
                    "slug": "cooking",
                    "language": "eng",
                    "games_count": 1409,
                    "image_background": "https://media.rawg.io/media/screenshots/b46/b46912034e3c991f6cfd51017a975484.jpg"
                },
                {
                    "id": 59464,
                    "name": "Готовка",
                    "slug": "gotovka",
                    "language": "rus",
                    "games_count": 26,
                    "image_background": "https://media.rawg.io/media/screenshots/385/385fe1544d137e7912b4353a516c7a76_cazGmTr.jpg"
                }
            ],
            "esrb_rating": null,
            "user_game": null,
            "reviews_count": 6,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/screenshots/9ab/9ab269a8afafacb256b40485d516fb2a.jpg"
                },
                {
                    "id": 2111818,
                    "image": "https://media.rawg.io/media/screenshots/835/835b8ec9b52a134bcdb116bc0b535d12.jpg"
                },
                {
                    "id": 2111819,
                    "image": "https://media.rawg.io/media/screenshots/2ac/2ac1f4f30125791188c1a074137a39fd_CvjbJfR.jpg"
                },
                {
                    "id": 2111820,
                    "image": "https://media.rawg.io/media/screenshots/bf9/bf9609ec991063c9fa64468696a6384a.jpg"
                },
                {
                    "id": 2111821,
                    "image": "https://media.rawg.io/media/screenshots/793/7939f1efbe59c01266acf67e7c145eb3.jpg"
                },
                {
                    "id": 2111822,
                    "image": "https://media.rawg.io/media/screenshots/9ab/9ab269a8afafacb256b40485d516fb2a.jpg"
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 1,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 3,
                        "name": "Xbox",
                        "slug": "xbox"
                    }
                },
                {
                    "platform": {
                        "id": 4,
                        "name": "iOS",
                        "slug": "ios"
                    }
                },
                {
                    "platform": {
                        "id": 5,
                        "name": "Apple Macintosh",
                        "slug": "mac"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo",
                        "slug": "nintendo"
                    }
                }
            ],
            "genres": [
                {
                    "id": 40,
                    "name": "Casual",
                    "slug": "casual"
                },
                {
                    "id": 51,
                    "name": "Indie",
                    "slug": "indie"
                },
                {
                    "id": 7,
                    "name": "Puzzle",
                    "slug": "puzzle"
                }
            ]
        },
        {
            "slug": "ultragoodness-2",
            "name": "UltraGoodness 2",
            "playtime": 8,
            "platforms": [
                {
                    "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 187,
                        "name": "PlayStation 5",
                        "slug": "playstation5"
                    }
                },
                {
                    "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one"
                    }
                },
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                }
            ],
            "stores": [
                {
                    "store": {
                        "id": 1,
                        "name": "Steam",
                        "slug": "steam"
                    }
                },
                {
                    "store": {
                        "id": 3,
                        "name": "PlayStation Store",
                        "slug": "playstation-store"
                    }
                },
                {
                    "store": {
                        "id": 2,
                        "name": "Xbox Store",
                        "slug": "xbox-store"
                    }
                },
                {
                    "store": {
                        "id": 5,
                        "name": "GOG",
                        "slug": "gog"
                    }
                },
                {
                    "store": {
                        "id": 11,
                        "name": "Epic Games",
                        "slug": "epic-games"
                    }
                }
            ],
            "released": "2019-09-01",
            "tba": false,
            "background_image": "https://media.rawg.io/media/screenshots/c18/c18be0643a9308302555db3e32dbbd3e.jpg",
            "rating": 0.0,
            "rating_top": 0,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 1,
                    "percent": 50.0
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 1,
                    "percent": 50.0
                }
            ],
            "ratings_count": 2,
            "reviews_text_count": 0,
            "added": 24,
            "added_by_status": {
                "owned": 23,
                "beaten": 1
            },
            "metacritic": null,
            "suggestions_count": 267,
            "updated": "2022-11-18T07:10:35",
            "id": 364864,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 31,
                    "name": "Singleplayer",
                    "slug": "singleplayer",
                    "language": "eng",
                    "games_count": 206693,
                    "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                },
                {
                    "id": 42396,
                    "name": "Для одного игрока",
                    "slug": "dlia-odnogo-igroka",
                    "language": "rus",
                    "games_count": 35289,
                    "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
                },
                {
                    "id": 42417,
                    "name": "Экшен",
                    "slug": "ekshen",
                    "language": "rus",
                    "games_count": 32512,
                    "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                },
                {
                    "id": 42392,
                    "name": "Приключение",
                    "slug": "prikliuchenie",
                    "language": "rus",
                    "games_count": 30453,
                    "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                },
                {
                    "id": 40847,
                    "name": "Steam Achievements",
                    "slug": "steam-achievements",
                    "language": "eng",
                    "games_count": 30894,
                    "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
                },
                {
                    "id": 42398,
                    "name": "Инди",
                    "slug": "indi-2",
                    "language": "rus",
                    "games_count": 46302,
                    "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
                },
                {
                    "id": 40849,
                    "name": "Steam Cloud",
                    "slug": "steam-cloud",
                    "language": "eng",
                    "games_count": 14368,
                    "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
                },
                {
                    "id": 42401,
                    "name": "Отличный саундтрек",
                    "slug": "otlichnyi-saundtrek",
                    "language": "rus",
                    "games_count": 4465,
                    "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
                },
                {
                    "id": 42,
                    "name": "Great Soundtrack",
                    "slug": "great-soundtrack",
                    "language": "eng",
                    "games_count": 3243,
                    "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
                },
                {
                    "id": 42428,
                    "name": "Шутер",
                    "slug": "shuter",
                    "language": "rus",
                    "games_count": 6879,
                    "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
                },
                {
                    "id": 45,
                    "name": "2D",
                    "slug": "2d",
                    "language": "eng",
                    "games_count": 188311,
                    "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
                },
                {
                    "id": 42482,
                    "name": "Смешная",
                    "slug": "smeshnaia",
                    "language": "rus",
                    "games_count": 6620,
                    "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                },
                {
                    "id": 4,
                    "name": "Funny",
                    "slug": "funny",
                    "language": "eng",
                    "games_count": 22625,
                    "image_background": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
                },
                {
                    "id": 42491,
                    "name": "Мясо",
                    "slug": "miaso",
                    "language": "rus",
                    "games_count": 3941,
                    "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
                },
                {
                    "id": 26,
                    "name": "Gore",
                    "slug": "gore",
                    "language": "eng",
                    "games_count": 5077,
                    "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
                },
                {
                    "id": 42481,
                    "name": "Юмор",
                    "slug": "iumor",
                    "language": "rus",
                    "games_count": 4275,
                    "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
                },
                {
                    "id": 123,
                    "name": "Comedy",
                    "slug": "comedy",
                    "language": "eng",
                    "games_count": 10945,
                    "image_background": "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
                },
                {
                    "id": 41,
                    "name": "Dark",
                    "slug": "dark",
                    "language": "eng",
                    "games_count": 14190,
                    "image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
                },
                {
                    "id": 42587,
                    "name": "Аркада",
                    "slug": "arkada",
                    "language": "rus",
                    "games_count": 7729,
                    "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
                },
                {
                    "id": 42601,
                    "name": "Цветастая",
                    "slug": "tsvetastaia",
                    "language": "rus",
                    "games_count": 9450,
                    "image_background": "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg"
                },
                {
                    "id": 42612,
                    "name": "Быстрая",
                    "slug": "bystraia",
                    "language": "rus",
                    "games_count": 1524,
                    "image_background": "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg"
                },
                {
                    "id": 165,
                    "name": "Colorful",
                    "slug": "colorful",
                    "language": "eng",
                    "games_count": 18029,
                    "image_background": "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg"
                },
                {
                    "id": 131,
                    "name": "Fast-Paced",
                    "slug": "fast-paced",
                    "language": "eng",
                    "games_count": 10276,
                    "image_background": "https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg"
                },
                {
                    "id": 42515,
                    "name": "Вид сверху",
                    "slug": "vid-sverkhu",
                    "language": "rus",
                    "games_count": 4446,
                    "image_background": "https://media.rawg.io/media/games/003/0031c0067559d41df19cf98ad87e02aa.jpg"
                },
                {
                    "id": 61,
                    "name": "Top-Down",
                    "slug": "top-down",
                    "language": "eng",
                    "games_count": 23053,
                    "image_background": "https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg"
                },
                {
                    "id": 270,
                    "name": "Blood",
                    "slug": "blood",
                    "language": "eng",
                    "games_count": 1947,
                    "image_background": "https://media.rawg.io/media/games/e11/e11325e2f89151d31f612e38dee3b6a0.jpg"
                },
                {
                    "id": 981,
                    "name": "battle",
                    "slug": "battle",
                    "language": "eng",
                    "games_count": 10551,
                    "image_background": "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg"
                },
                {
                    "id": 42577,
                    "name": "Кровь",
                    "slug": "krov",
                    "language": "rus",
                    "games_count": 358,
                    "image_background": "https://media.rawg.io/media/screenshots/a97/a97b0e257daca77c23cf93ac9fff7487.jpg"
                },
                {
                    "id": 5816,
                    "name": "console",
                    "slug": "console",
                    "language": "eng",
                    "games_count": 1387,
                    "image_background": "https://media.rawg.io/media/games/4fe/4feffcec6315c5f5a96442a8444431ca.jpg"
                },
                {
                    "id": 4565,
                    "name": "offline",
                    "slug": "offline",
                    "language": "eng",
                    "games_count": 1054,
                    "image_background": "https://media.rawg.io/media/games/415/41563ce6cb061a210160687a4e5d39f6.jpg"
                },
                {
                    "id": 42510,
                    "name": "Замедление времени",
                    "slug": "zamedlenie-vremeni",
                    "language": "rus",
                    "games_count": 469,
                    "image_background": "https://media.rawg.io/media/games/1da/1da9a7af524e81d257f972fbc06baefd.jpg"
                },
                {
                    "id": 42570,
                    "name": "Контроль времени",
                    "slug": "kontrol-vremeni",
                    "language": "rus",
                    "games_count": 427,
                    "image_background": "https://media.rawg.io/media/games/3fb/3fbe3c1d67fdda2685b0f49e06813038.jpg"
                },
                {
                    "id": 308,
                    "name": "Bullet Time",
                    "slug": "bullet-time",
                    "language": "eng",
                    "games_count": 449,
                    "image_background": "https://media.rawg.io/media/screenshots/e3b/e3b95c384815dec5979388afb7d7d5bd.jpeg"
                },
                {
                    "id": 302,
                    "name": "Time Manipulation",
                    "slug": "time-manipulation",
                    "language": "eng",
                    "games_count": 402,
                    "image_background": "https://media.rawg.io/media/games/dd7/dd72d8a527cd9245c7eb7cd05aa53efa.jpg"
                },
                {
                    "id": 2590,
                    "name": "fun",
                    "slug": "fun",
                    "language": "eng",
                    "games_count": 29095,
                    "image_background": "https://media.rawg.io/media/screenshots/f0d/f0da831778e57b58636ccaf20a7cc6e6.jpg"
                },
                {
                    "id": 704,
                    "name": "Traps",
                    "slug": "traps",
                    "language": "eng",
                    "games_count": 2182,
                    "image_background": "https://media.rawg.io/media/screenshots/7f2/7f280778b23561fe3ea8ffa04d5ed61f.jpg"
                },
                {
                    "id": 2528,
                    "name": "brain",
                    "slug": "brain",
                    "language": "eng",
                    "games_count": 4169,
                    "image_background": "https://media.rawg.io/media/games/431/4317e294e88e4c9d77327693b15f499a.jpg"
                },
                {
                    "id": 3103,
                    "name": "evil",
                    "slug": "evil",
                    "language": "eng",
                    "games_count": 1302,
                    "image_background": "https://media.rawg.io/media/games/5c3/5c3f7f973a94a73f2d504bf99ba47cbb.jpg"
                },
                {
                    "id": 3116,
                    "name": "fast",
                    "slug": "fast",
                    "language": "eng",
                    "games_count": 2155,
                    "image_background": "https://media.rawg.io/media/games/9fd/9fd80de84c28491615f069cc6d173e48.jpg"
                },
                {
                    "id": 2631,
                    "name": "cat",
                    "slug": "cat",
                    "language": "eng",
                    "games_count": 2363,
                    "image_background": "https://media.rawg.io/media/screenshots/fad/fad06758e7b3d50aab21b3026824e726.jpg"
                },
                {
                    "id": 3942,
                    "name": "rage",
                    "slug": "rage",
                    "language": "eng",
                    "games_count": 1282,
                    "image_background": "https://media.rawg.io/media/games/dbe/dbe51f372bc094270b2e500b5c864723.jpg"
                }
            ],
            "esrb_rating": null,
            "user_game": null,
            "reviews_count": 2,
            "community_rating": 0,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/screenshots/c18/c18be0643a9308302555db3e32dbbd3e.jpg"
                },
                {
                    "id": 2129765,
                    "image": "https://media.rawg.io/media/screenshots/5a9/5a9465cd3e9040bf56187cb78baa609a.jpg"
                },
                {
                    "id": 2129766,
                    "image": "https://media.rawg.io/media/screenshots/faf/fafbf2b9e6f6b5d1b7ec4a8b6af4b62a.jpg"
                },
                {
                    "id": 2129767,
                    "image": "https://media.rawg.io/media/screenshots/51c/51c658b6460a50661b4dc4aea86c5a17.jpg"
                },
                {
                    "id": 2129768,
                    "image": "https://media.rawg.io/media/screenshots/550/550fbf046e52a3850b0f869199249c67.jpg"
                },
                {
                    "id": 2129769,
                    "image": "https://media.rawg.io/media/screenshots/3e6/3e6e949a9e1e6370b24f6f5166cc47de.jpg"
                },
                {
                    "id": 2129770,
                    "image": "https://media.rawg.io/media/screenshots/e89/e89b1b16bc5c5d29d0eb7da443bf880f.jpg"
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 1,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 2,
                        "name": "PlayStation",
                        "slug": "playstation"
                    }
                },
                {
                    "platform": {
                        "id": 3,
                        "name": "Xbox",
                        "slug": "xbox"
                    }
                }
            ],
            "genres": [
                {
                    "id": 51,
                    "name": "Indie",
                    "slug": "indie"
                },
                {
                    "id": 3,
                    "name": "Adventure",
                    "slug": "adventure"
                },
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action"
                }
            ]
        },
        {
            "slug": "fifty-words-by-powgi",
            "name": "Fifty Words by POWGI",
            "playtime": 0,
            "platforms": [
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo Switch",
                        "slug": "nintendo-switch"
                    }
                }
            ],
            "stores": [
                {
                    "store": {
                        "id": 3,
                        "name": "PlayStation Store",
                        "slug": "playstation-store"
                    }
                },
                {
                    "store": {
                        "id": 6,
                        "name": "Nintendo Store",
                        "slug": "nintendo"
                    }
                }
            ],
            "released": "2019-09-03",
            "tba": false,
            "background_image": "https://media.rawg.io/media/screenshots/4a9/4a9dce6e08d1ae5cd9f0dda939d3e9b2.jpg",
            "rating": 0.0,
            "rating_top": 0,
            "ratings": [
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 2,
                    "percent": 100.0
                }
            ],
            "ratings_count": 2,
            "reviews_text_count": 0,
            "added": 16,
            "added_by_status": {
                "owned": 13,
                "beaten": 2,
                "dropped": 1
            },
            "metacritic": null,
            "suggestions_count": 47,
            "updated": "2019-11-19T18:59:32",
            "id": 371851,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 413,
                    "name": "online",
                    "slug": "online",
                    "language": "eng",
                    "games_count": 6524,
                    "image_background": "https://media.rawg.io/media/screenshots/3ea/3ea3f535b2a779ca5cd2e466a2f8abba.jpg"
                },
                {
                    "id": 86,
                    "name": "Education",
                    "slug": "education",
                    "language": "eng",
                    "games_count": 2293,
                    "image_background": "https://media.rawg.io/media/screenshots/1f8/1f88df2a4ac96e2ff626b6bedce43704.jpg"
                },
                {
                    "id": 1129,
                    "name": "art",
                    "slug": "art",
                    "language": "eng",
                    "games_count": 9773,
                    "image_background": "https://media.rawg.io/media/games/b23/b23e516c7c846435b9e7708a73207b67.jpg"
                },
                {
                    "id": 20047,
                    "name": "lifestyle",
                    "slug": "lifestyle",
                    "language": "eng",
                    "games_count": 169,
                    "image_background": "https://media.rawg.io/media/screenshots/50b/50b96fce25b0f592775e46e4adceb086.jpg"
                },
                {
                    "id": 3189,
                    "name": "color",
                    "slug": "color",
                    "language": "eng",
                    "games_count": 6475,
                    "image_background": "https://media.rawg.io/media/screenshots/13f/13fbabb0f35721f1f15fbd4c87d960ea.jpg"
                },
                {
                    "id": 2835,
                    "name": "word",
                    "slug": "word",
                    "language": "eng",
                    "games_count": 2060,
                    "image_background": "https://media.rawg.io/media/screenshots/d2a/d2aba0d270da168cc96dbd69e854f787.jpg"
                },
                {
                    "id": 3953,
                    "name": "words",
                    "slug": "words",
                    "language": "eng",
                    "games_count": 1993,
                    "image_background": "https://media.rawg.io/media/screenshots/a8b/a8b4ab5f642bc4764a27e0c01f2d2820.jpg"
                },
                {
                    "id": 3709,
                    "name": "grid",
                    "slug": "grid",
                    "language": "eng",
                    "games_count": 757,
                    "image_background": "https://media.rawg.io/media/screenshots/880/880cf27601bdeab2898f143933a3f0c7.jpg"
                }
            ],
            "esrb_rating": {
                "id": 1,
                "name": "Everyone",
                "slug": "everyone",
                "name_en": "Everyone",
                "name_ru": "Для всех"
            },
            "user_game": null,
            "reviews_count": 2,
            "community_rating": 0,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/screenshots/4a9/4a9dce6e08d1ae5cd9f0dda939d3e9b2.jpg"
                },
                {
                    "id": 2236042,
                    "image": "https://media.rawg.io/media/screenshots/cc6/cc664379df745f80d64f21ea28620430.jpg"
                },
                {
                    "id": 2236043,
                    "image": "https://media.rawg.io/media/screenshots/ac6/ac6d4ca713a3815c82989cb72ef9c277.jpg"
                },
                {
                    "id": 2236044,
                    "image": "https://media.rawg.io/media/screenshots/4a9/4a9dce6e08d1ae5cd9f0dda939d3e9b2.jpg"
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 2,
                        "name": "PlayStation",
                        "slug": "playstation"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo",
                        "slug": "nintendo"
                    }
                }
            ],
            "genres": [

            ]
        },
        {
            "slug": "post-war-dreams",
            "name": "Post War Dreams",
            "playtime": 0,
            "platforms": [
                {
                    "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one"
                    }
                },
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                }
            ],
            "stores": [
                {
                    "store": {
                        "id": 1,
                        "name": "Steam",
                        "slug": "steam"
                    }
                },
                {
                    "store": {
                        "id": 3,
                        "name": "PlayStation Store",
                        "slug": "playstation-store"
                    }
                },
                {
                    "store": {
                        "id": 2,
                        "name": "Xbox Store",
                        "slug": "xbox-store"
                    }
                }
            ],
            "released": "2019-09-03",
            "tba": false,
            "background_image": "https://media.rawg.io/media/screenshots/6c2/6c23959ae2f5a4c4a470911f73f80601.jpg",
            "rating": 0.0,
            "rating_top": 0,
            "ratings": [
                {
                    "id": 1,
                    "title": "skip",
                    "count": 1,
                    "percent": 100.0
                }
            ],
            "ratings_count": 1,
            "reviews_text_count": 0,
            "added": 15,
            "added_by_status": {
                "owned": 13,
                "toplay": 2
            },
            "metacritic": null,
            "suggestions_count": 501,
            "updated": "2019-09-06T02:07:59",
            "id": 22612,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 31,
                    "name": "Singleplayer",
                    "slug": "singleplayer",
                    "language": "eng",
                    "games_count": 207021,
                    "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
                },
                {
                    "id": 42417,
                    "name": "Экшен",
                    "slug": "ekshen",
                    "language": "rus",
                    "games_count": 32656,
                    "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                },
                {
                    "id": 40847,
                    "name": "Steam Achievements",
                    "slug": "steam-achievements",
                    "language": "eng",
                    "games_count": 31032,
                    "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                },
                {
                    "id": 42398,
                    "name": "Инди",
                    "slug": "indi-2",
                    "language": "rus",
                    "games_count": 46460,
                    "image_background": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg"
                },
                {
                    "id": 40836,
                    "name": "Full controller support",
                    "slug": "full-controller-support",
                    "language": "eng",
                    "games_count": 14568,
                    "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
                },
                {
                    "id": 42394,
                    "name": "Глубокий сюжет",
                    "slug": "glubokii-siuzhet",
                    "language": "rus",
                    "games_count": 9261,
                    "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                },
                {
                    "id": 24,
                    "name": "RPG",
                    "slug": "rpg",
                    "language": "eng",
                    "games_count": 17526,
                    "image_background": "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
                },
                {
                    "id": 42412,
                    "name": "Ролевая игра",
                    "slug": "rolevaia-igra",
                    "language": "rus",
                    "games_count": 13936,
                    "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                },
                {
                    "id": 118,
                    "name": "Story Rich",
                    "slug": "story-rich",
                    "language": "eng",
                    "games_count": 18442,
                    "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
                },
                {
                    "id": 40850,
                    "name": "Steam Leaderboards",
                    "slug": "steam-leaderboards",
                    "language": "eng",
                    "games_count": 5915,
                    "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
                },
                {
                    "id": 11669,
                    "name": "stats",
                    "slug": "stats",
                    "language": "eng",
                    "games_count": 4517,
                    "image_background": "https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg"
                },
                {
                    "id": 14,
                    "name": "Early Access",
                    "slug": "early-access",
                    "language": "eng",
                    "games_count": 12530,
                    "image_background": "https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg"
                },
                {
                    "id": 43,
                    "name": "Post-apocalyptic",
                    "slug": "post-apocalyptic",
                    "language": "eng",
                    "games_count": 3373,
                    "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
                },
                {
                    "id": 42488,
                    "name": "Пост-апокалипсис",
                    "slug": "post-apokalipsis",
                    "language": "rus",
                    "games_count": 749,
                    "image_background": "https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg"
                },
                {
                    "id": 42667,
                    "name": "Псевдотрёхмерность",
                    "slug": "psevdotriokhmernost",
                    "language": "rus",
                    "games_count": 1470,
                    "image_background": "https://media.rawg.io/media/screenshots/b3d/b3d76daf8412a4902f288926699cb7f6.jpg"
                },
                {
                    "id": 116,
                    "name": "2.5D",
                    "slug": "25d",
                    "language": "eng",
                    "games_count": 1397,
                    "image_background": "https://media.rawg.io/media/games/7ba/7baf4663962bad7197e2470d59a6e322.jpg"
                }
            ],
            "esrb_rating": null,
            "user_game": null,
            "reviews_count": 1,
            "community_rating": 0,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/screenshots/6c2/6c23959ae2f5a4c4a470911f73f80601.jpg"
                },
                {
                    "id": 216245,
                    "image": "https://media.rawg.io/media/screenshots/1f6/1f6da16d226799fe4d97289c869e9459.jpg"
                },
                {
                    "id": 216246,
                    "image": "https://media.rawg.io/media/screenshots/191/191170d67aa1f43b955b4d3270c44657.jpg"
                },
                {
                    "id": 216247,
                    "image": "https://media.rawg.io/media/screenshots/294/294694c011fadffe62c52661b7404f42.jpg"
                },
                {
                    "id": 216248,
                    "image": "https://media.rawg.io/media/screenshots/e4f/e4fbcc93546a29787d24d2dee804b25f.jpg"
                },
                {
                    "id": 216249,
                    "image": "https://media.rawg.io/media/screenshots/4ff/4ffc1b6a96a87427e965f59306151778.jpg"
                },
                {
                    "id": 216250,
                    "image": "https://media.rawg.io/media/screenshots/3d5/3d500865d9443ce7731d13bd7371b7b7.jpg"
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 1,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 2,
                        "name": "PlayStation",
                        "slug": "playstation"
                    }
                },
                {
                    "platform": {
                        "id": 3,
                        "name": "Xbox",
                        "slug": "xbox"
                    }
                }
            ],
            "genres": [
                {
                    "id": 51,
                    "name": "Indie",
                    "slug": "indie"
                },
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action"
                },
                {
                    "id": 5,
                    "name": "RPG",
                    "slug": "role-playing-games-rpg"
                }
            ]
        },
        {
            "slug": "sudden-strike-4-complete-collection",
            "name": "Sudden Strike 4: Complete Collection",
            "playtime": 0,
            "platforms": [
                {
                    "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one"
                    }
                },
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                },
                {
                    "platform": {
                        "id": 5,
                        "name": "macOS",
                        "slug": "macos"
                    }
                },
                {
                    "platform": {
                        "id": 6,
                        "name": "Linux",
                        "slug": "linux"
                    }
                }
            ],
            "stores": [
                {
                    "store": {
                        "id": 3,
                        "name": "PlayStation Store",
                        "slug": "playstation-store"
                    }
                },
                {
                    "store": {
                        "id": 2,
                        "name": "Xbox Store",
                        "slug": "xbox-store"
                    }
                },
                {
                    "store": {
                        "id": 5,
                        "name": "GOG",
                        "slug": "gog"
                    }
                }
            ],
            "released": "2019-09-02",
            "tba": false,
            "background_image": "https://media.rawg.io/media/screenshots/bde/bde163f4a9ace7b36ff1fff6ecf89477.jpg",
            "rating": 0.0,
            "rating_top": 0,
            "ratings": [

            ],
            "ratings_count": 0,
            "reviews_text_count": 0,
            "added": 6,
            "added_by_status": {
                "yet": 3,
                "owned": 1,
                "toplay": 1,
                "dropped": 1
            },
            "metacritic": null,
            "suggestions_count": 511,
            "updated": "2022-09-05T16:59:59",
            "id": 372734,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 31,
                    "name": "Singleplayer",
                    "slug": "singleplayer",
                    "language": "eng",
                    "games_count": 210643,
                    "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
                },
                {
                    "id": 7,
                    "name": "Multiplayer",
                    "slug": "multiplayer",
                    "language": "eng",
                    "games_count": 35692,
                    "image_background": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
                },
                {
                    "id": 70,
                    "name": "War",
                    "slug": "war",
                    "language": "eng",
                    "games_count": 8804,
                    "image_background": "https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg"
                },
                {
                    "id": 981,
                    "name": "battle",
                    "slug": "battle",
                    "language": "eng",
                    "games_count": 10614,
                    "image_background": "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg"
                },
                {
                    "id": 1626,
                    "name": "collection",
                    "slug": "collection",
                    "language": "eng",
                    "games_count": 3654,
                    "image_background": "https://media.rawg.io/media/games/d2b/d2bf506b184ac94ca5f10570c8ab6d41.jpg"
                },
                {
                    "id": 5488,
                    "name": "tank",
                    "slug": "tank",
                    "language": "eng",
                    "games_count": 1371,
                    "image_background": "https://media.rawg.io/media/screenshots/97d/97d9fc541c7e31ef7fc9cf6df8f39b62.jpg"
                },
                {
                    "id": 980,
                    "name": "winter",
                    "slug": "winter",
                    "language": "eng",
                    "games_count": 1609,
                    "image_background": "https://media.rawg.io/media/screenshots/1b4/1b4f0adeea43f6ae2266c8fcbe3bd13c.jpg"
                },
                {
                    "id": 3720,
                    "name": "numbers",
                    "slug": "numbers",
                    "language": "eng",
                    "games_count": 2408,
                    "image_background": "https://media.rawg.io/media/screenshots/f66/f667fab673e6f87da373a70aa3530e06.jpg"
                },
                {
                    "id": 2546,
                    "name": "ships",
                    "slug": "ships",
                    "language": "eng",
                    "games_count": 1573,
                    "image_background": "https://media.rawg.io/media/screenshots/09a/09a872748e32bc9ef4c8b394c3dc6822.jpg"
                },
                {
                    "id": 2074,
                    "name": "desert",
                    "slug": "desert",
                    "language": "eng",
                    "games_count": 1594,
                    "image_background": "https://media.rawg.io/media/screenshots/aca/aca80d402fcf64ea31d63cafe14cc6d2.jpg"
                },
                {
                    "id": 4338,
                    "name": "egypt",
                    "slug": "egypt",
                    "language": "eng",
                    "games_count": 351,
                    "image_background": "https://media.rawg.io/media/screenshots/71e/71e4136c93fee3d76bb0e94fe0fd2d08.jpg"
                }
            ],
            "esrb_rating": null,
            "user_game": null,
            "reviews_count": 0,
            "community_rating": 0,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/screenshots/bde/bde163f4a9ace7b36ff1fff6ecf89477.jpg"
                },
                {
                    "id": 2154705,
                    "image": "https://media.rawg.io/media/screenshots/c6c/c6c3089a1a88798aa67b882e06d05999.jpg"
                },
                {
                    "id": 2154706,
                    "image": "https://media.rawg.io/media/screenshots/13e/13e37b0435f95aedb0e0de1b406bf513.jpg"
                },
                {
                    "id": 2154707,
                    "image": "https://media.rawg.io/media/screenshots/ee3/ee34c519a7e95b51fe7ccaa35340eda4.jpg"
                },
                {
                    "id": 2154708,
                    "image": "https://media.rawg.io/media/screenshots/011/0115aa5d255023a6a43bca460e4db333.jpg"
                },
                {
                    "id": 2154709,
                    "image": "https://media.rawg.io/media/screenshots/fc8/fc8292941fe35a165223f4a76547b82e.jpg"
                },
                {
                    "id": 2154710,
                    "image": "https://media.rawg.io/media/screenshots/592/592cd18a0d3dc41f20985644b87da940.jpg"
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 1,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 2,
                        "name": "PlayStation",
                        "slug": "playstation"
                    }
                },
                {
                    "platform": {
                        "id": 3,
                        "name": "Xbox",
                        "slug": "xbox"
                    }
                },
                {
                    "platform": {
                        "id": 5,
                        "name": "Apple Macintosh",
                        "slug": "mac"
                    }
                },
                {
                    "platform": {
                        "id": 6,
                        "name": "Linux",
                        "slug": "linux"
                    }
                }
            ],
            "genres": [
                {
                    "id": 10,
                    "name": "Strategy",
                    "slug": "strategy"
                }
            ]
        },
        {
            "slug": "root-letter-last-answer-2",
            "name": "√ Root Letter: Last Answer",
            "playtime": 0,
            "platforms": [
                {
                    "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo Switch",
                        "slug": "nintendo-switch"
                    }
                },
                {
                    "platform": {
                        "id": 19,
                        "name": "PS Vita",
                        "slug": "ps-vita"
                    }
                }
            ],
            "stores": [
                {
                    "store": {
                        "id": 1,
                        "name": "Steam",
                        "slug": "steam"
                    }
                },
                {
                    "store": {
                        "id": 3,
                        "name": "PlayStation Store",
                        "slug": "playstation-store"
                    }
                },
                {
                    "store": {
                        "id": 6,
                        "name": "Nintendo Store",
                        "slug": "nintendo"
                    }
                }
            ],
            "released": "2019-09-03",
            "tba": false,
            "background_image": "https://media.rawg.io/media/screenshots/4d9/4d9b21c07758bb0088604f3d6775dbcc.jpg",
            "rating": 0.0,
            "rating_top": 0,
            "ratings": [
                {
                    "id": 3,
                    "title": "meh",
                    "count": 2,
                    "percent": 100.0
                }
            ],
            "ratings_count": 1,
            "reviews_text_count": 1,
            "added": 6,
            "added_by_status": {
                "yet": 1,
                "owned": 1,
                "beaten": 4
            },
            "metacritic": 61,
            "suggestions_count": 284,
            "updated": "2022-05-26T11:19:13",
            "id": 371852,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 117,
                    "name": "Mystery",
                    "slug": "mystery",
                    "language": "eng",
                    "games_count": 12250,
                    "image_background": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
                },
                {
                    "id": 413,
                    "name": "online",
                    "slug": "online",
                    "language": "eng",
                    "games_count": 6537,
                    "image_background": "https://media.rawg.io/media/screenshots/587/58785538b2d3a7226fa2c07d36e02b2b.jpeg"
                },
                {
                    "id": 744,
                    "name": "friends",
                    "slug": "friends",
                    "language": "eng",
                    "games_count": 15105,
                    "image_background": "https://media.rawg.io/media/games/1db/1dbc3d0c9de2709e21326cdcb91468ae.jpg"
                },
                {
                    "id": 2326,
                    "name": "explore",
                    "slug": "explore",
                    "language": "eng",
                    "games_count": 3276,
                    "image_background": "https://media.rawg.io/media/screenshots/97a/97ab26a9d092783e68190dc686916b0b.jpg"
                },
                {
                    "id": 920,
                    "name": "murder",
                    "slug": "murder",
                    "language": "eng",
                    "games_count": 733,
                    "image_background": "https://media.rawg.io/media/games/549/549414dd9ecff25b586462b763afe3eb.jpg"
                },
                {
                    "id": 712,
                    "name": "school",
                    "slug": "school",
                    "language": "eng",
                    "games_count": 4561,
                    "image_background": "https://media.rawg.io/media/screenshots/6b5/6b546e8ec2596462551e772c30f2e80a.jpg"
                }
            ],
            "esrb_rating": {
                "id": 4,
                "name": "Mature",
                "slug": "mature",
                "name_en": "Mature",
                "name_ru": "С 17 лет"
            },
            "user_game": null,
            "reviews_count": 2,
            "community_rating": 0,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/screenshots/4d9/4d9b21c07758bb0088604f3d6775dbcc.jpg"
                },
                {
                    "id": 2160242,
                    "image": "https://media.rawg.io/media/screenshots/540/5407bba3248f97f8537a3f9a6481fc75.jpg"
                },
                {
                    "id": 2160243,
                    "image": "https://media.rawg.io/media/screenshots/cba/cba83fdb665e94efedda46cec9b29bf9.jpg"
                },
                {
                    "id": 2160244,
                    "image": "https://media.rawg.io/media/screenshots/1f4/1f44cd1b85173c13a2c0a2f54eebc811.jpg"
                },
                {
                    "id": 2160245,
                    "image": "https://media.rawg.io/media/screenshots/95c/95ce659c63e7c88636fb07e687b80a63.jpg"
                },
                {
                    "id": 2160246,
                    "image": "https://media.rawg.io/media/screenshots/36c/36c5efac3d54f474111c30a8bd6f7a12.jpg"
                },
                {
                    "id": 2160247,
                    "image": "https://media.rawg.io/media/screenshots/552/552c36ea0a897a0d296dbf8a6aca649e.jpg"
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 1,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 2,
                        "name": "PlayStation",
                        "slug": "playstation"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo",
                        "slug": "nintendo"
                    }
                }
            ],
            "genres": [
                {
                    "id": 3,
                    "name": "Adventure",
                    "slug": "adventure"
                }
            ]
        },
        {
            "slug": "tom-clancys-ghost-recon-breakpoint-beta",
            "name": "Tom Clancy's Ghost Recon Breakpoint Beta",
            "playtime": 0,
            "platforms": [
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                }
            ],
            "stores": null,
            "released": "2019-09-03",
            "tba": false,
            "background_image": null,
            "rating": 0.0,
            "rating_top": 0,
            "ratings": [
                {
                    "id": 1,
                    "title": "skip",
                    "count": 1,
                    "percent": 100.0
                }
            ],
            "ratings_count": 1,
            "reviews_text_count": 0,
            "added": 3,
            "added_by_status": {
                "beaten": 1,
                "dropped": 2
            },
            "metacritic": null,
            "suggestions_count": 0,
            "updated": "2019-10-23T14:57:07",
            "id": 371853,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 413,
                    "name": "online",
                    "slug": "online",
                    "language": "eng",
                    "games_count": 6524,
                    "image_background": "https://media.rawg.io/media/games/73d/73db43df633477d4604c7248292f34b2.jpg"
                },
                {
                    "id": 1709,
                    "name": "work",
                    "slug": "work",
                    "language": "eng",
                    "games_count": 9168,
                    "image_background": "https://media.rawg.io/media/screenshots/10e/10e169bb13e65551a0ab7127a83585df.jpg"
                },
                {
                    "id": 2209,
                    "name": "ghost",
                    "slug": "ghost",
                    "language": "eng",
                    "games_count": 1343,
                    "image_background": "https://media.rawg.io/media/screenshots/d7c/d7c5136b60a53aa1323b21b41ab7d801.jpg"
                },
                {
                    "id": 4881,
                    "name": "bugs",
                    "slug": "bugs",
                    "language": "eng",
                    "games_count": 3835,
                    "image_background": "https://media.rawg.io/media/screenshots/aee/aeedea26f87d9d716b98ab3b0d85886d.jpg"
                },
                {
                    "id": 6214,
                    "name": "beta",
                    "slug": "beta",
                    "language": "eng",
                    "games_count": 1236,
                    "image_background": "https://media.rawg.io/media/screenshots/a9c/a9c3d61c1b3eeb4038aee9bad98200a7.jpg"
                }
            ],
            "esrb_rating": null,
            "user_game": null,
            "reviews_count": 1,
            "community_rating": 0,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [

            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 2,
                        "name": "PlayStation",
                        "slug": "playstation"
                    }
                }
            ],
            "genres": [
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action"
                }
            ]
        },
        {
            "slug": "blindfold-a-verite-vr-experience",
            "name": "Blindfold A Vérité VR Experience",
            "playtime": 0,
            "platforms": [
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                }
            ],
            "stores": [
                {
                    "store": {
                        "id": 3,
                        "name": "PlayStation Store",
                        "slug": "playstation-store"
                    }
                }
            ],
            "released": "2019-09-03",
            "tba": false,
            "background_image": "https://media.rawg.io/media/screenshots/1fd/1fd2495ea39bbaabe0ff35f075a0efe3.jpg",
            "rating": 0.0,
            "rating_top": 0,
            "ratings": [

            ],
            "ratings_count": 0,
            "reviews_text_count": 0,
            "added": 1,
            "added_by_status": {
                "dropped": 1
            },
            "metacritic": null,
            "suggestions_count": 88,
            "updated": "2019-09-06T02:07:27",
            "id": 371850,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 33,
                    "name": "VR",
                    "slug": "vr",
                    "language": "eng",
                    "games_count": 11708,
                    "image_background": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg"
                },
                {
                    "id": 406,
                    "name": "Story",
                    "slug": "story",
                    "language": "eng",
                    "games_count": 11246,
                    "image_background": "https://media.rawg.io/media/screenshots/439/4397f836727bdd13bd38deeb4f7355bb_GacwmJ9.jpg"
                },
                {
                    "id": 413,
                    "name": "online",
                    "slug": "online",
                    "language": "eng",
                    "games_count": 6524,
                    "image_background": "https://media.rawg.io/media/screenshots/3ea/3ea3f535b2a779ca5cd2e466a2f8abba.jpg"
                },
                {
                    "id": 650,
                    "name": "prison",
                    "slug": "prison",
                    "language": "eng",
                    "games_count": 808,
                    "image_background": "https://media.rawg.io/media/screenshots/7bb/7bb2c334e2deef4abc0f2e1b3d691bd4.jpg"
                },
                {
                    "id": 4235,
                    "name": "ink",
                    "slug": "ink",
                    "language": "eng",
                    "games_count": 461,
                    "image_background": "https://media.rawg.io/media/screenshots/0f6/0f6b9db8a870a36c76fc6cb2401ad346.jpg"
                }
            ],
            "esrb_rating": null,
            "user_game": null,
            "reviews_count": 0,
            "community_rating": 0,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/screenshots/1fd/1fd2495ea39bbaabe0ff35f075a0efe3.jpg"
                },
                {
                    "id": 2160240,
                    "image": "https://media.rawg.io/media/screenshots/de9/de98ccb1e94acd4c534e85cadb55071e.jpg"
                },
                {
                    "id": 2160241,
                    "image": "https://media.rawg.io/media/screenshots/1fd/1fd2495ea39bbaabe0ff35f075a0efe3.jpg"
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 2,
                        "name": "PlayStation",
                        "slug": "playstation"
                    }
                }
            ],
            "genres": [
                {
                    "id": 3,
                    "name": "Adventure",
                    "slug": "adventure"
                }
            ]
        },
        {
            "slug": "fin-and-the-ancient-mystery",
            "name": "Fin and the Ancient Mystery",
            "playtime": 0,
            "platforms": [
                {
                    "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo Switch",
                        "slug": "nintendo-switch"
                    }
                }
            ],
            "stores": [
                {
                    "store": {
                        "id": 2,
                        "name": "Xbox Store",
                        "slug": "xbox-store"
                    }
                },
                {
                    "store": {
                        "id": 6,
                        "name": "Nintendo Store",
                        "slug": "nintendo"
                    }
                }
            ],
            "released": "2019-09-03",
            "tba": false,
            "background_image": "https://media.rawg.io/media/screenshots/4ca/4ca9994d3844657b0524c60ef3811c62.jpg",
            "rating": 0.0,
            "rating_top": 0,
            "ratings": [

            ],
            "ratings_count": 0,
            "reviews_text_count": 0,
            "added": 0,
            "added_by_status": null,
            "metacritic": null,
            "suggestions_count": 341,
            "updated": "2021-09-17T04:13:10",
            "id": 392132,
            "score": null,
            "clip": null,
            "tags": [
                {
                    "id": 468,
                    "name": "role-playing",
                    "slug": "role-playing",
                    "language": "eng",
                    "games_count": 1271,
                    "image_background": "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg"
                },
                {
                    "id": 82,
                    "name": "Magic",
                    "slug": "magic",
                    "language": "eng",
                    "games_count": 5300,
                    "image_background": "https://media.rawg.io/media/games/742/74276457ebb9466e11d75a2be7722265.jpg"
                },
                {
                    "id": 259,
                    "name": "Metroidvania",
                    "slug": "metroidvania",
                    "language": "eng",
                    "games_count": 2457,
                    "image_background": "https://media.rawg.io/media/games/26c/26cacc55399ed6b2c14e20d2eca0620a.jpg"
                },
                {
                    "id": 1867,
                    "name": "puzzles",
                    "slug": "puzzles",
                    "language": "eng",
                    "games_count": 7730,
                    "image_background": "https://media.rawg.io/media/games/e07/e07737df8469bf32d132ba9eaffc3461.jpg"
                },
                {
                    "id": 744,
                    "name": "friends",
                    "slug": "friends",
                    "language": "eng",
                    "games_count": 13783,
                    "image_background": "https://media.rawg.io/media/games/1db/1dbc3d0c9de2709e21326cdcb91468ae.jpg"
                },
                {
                    "id": 1529,
                    "name": "fight",
                    "slug": "fight",
                    "language": "eng",
                    "games_count": 6551,
                    "image_background": "https://media.rawg.io/media/screenshots/d7b/d7bf14ce235e7dbb2f83ffd383ae97ed.jpg"
                },
                {
                    "id": 624,
                    "name": "Monsters",
                    "slug": "monsters",
                    "language": "eng",
                    "games_count": 7057,
                    "image_background": "https://media.rawg.io/media/screenshots/7ae/7ae75478ca3658633b85780e05ab2c56.jpg"
                },
                {
                    "id": 820,
                    "name": "secrets",
                    "slug": "secrets",
                    "language": "eng",
                    "games_count": 2705,
                    "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
                },
                {
                    "id": 704,
                    "name": "Traps",
                    "slug": "traps",
                    "language": "eng",
                    "games_count": 1862,
                    "image_background": "https://media.rawg.io/media/games/c35/c354856af9151dc63844be4f9843d2c2.jpg"
                },
                {
                    "id": 1551,
                    "name": "ancient",
                    "slug": "ancient",
                    "language": "eng",
                    "games_count": 1149,
                    "image_background": "https://media.rawg.io/media/screenshots/593/5936a7fb9b53cd38341957cbf03be625.jpg"
                },
                {
                    "id": 878,
                    "name": "sword",
                    "slug": "sword",
                    "language": "eng",
                    "games_count": 1116,
                    "image_background": "https://media.rawg.io/media/screenshots/0ee/0ee1a1e3d1e885979a920d9e79e51a23.jpg"
                },
                {
                    "id": 2528,
                    "name": "brain",
                    "slug": "brain",
                    "language": "eng",
                    "games_count": 3701,
                    "image_background": "https://media.rawg.io/media/screenshots/f85/f856c14f8c8d7cb72085723960f5c8d5.jpg"
                },
                {
                    "id": 2489,
                    "name": "dodge",
                    "slug": "dodge",
                    "language": "eng",
                    "games_count": 2411,
                    "image_background": "https://media.rawg.io/media/games/9aa/9aab60ca72399232ccedfd767d84deb8.jpg"
                },
                {
                    "id": 2074,
                    "name": "desert",
                    "slug": "desert",
                    "language": "eng",
                    "games_count": 1381,
                    "image_background": "https://media.rawg.io/media/screenshots/424/424f6963412d3e9ca215d5d48f1e90ec.jpg"
                }
            ],
            "esrb_rating": {
                "id": 2,
                "name": "Everyone 10+",
                "slug": "everyone-10-plus",
                "name_en": "Everyone 10+",
                "name_ru": "С 10 лет"
            },
            "user_game": null,
            "reviews_count": 0,
            "community_rating": 0,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/screenshots/4ca/4ca9994d3844657b0524c60ef3811c62.jpg"
                },
                {
                    "id": 3025629,
                    "image": "https://media.rawg.io/media/screenshots/9fa/9fa068194f0d277f1ff3b45d1173120e_2xyEWUm.jpg"
                },
                {
                    "id": 3025630,
                    "image": "https://media.rawg.io/media/screenshots/169/169ceffc535dfdba8f6c92c9fba2cf63.jpg"
                },
                {
                    "id": 3025631,
                    "image": "https://media.rawg.io/media/screenshots/150/15011744c995a13939ada1058793ab2d_d2oBrcB.jpg"
                },
                {
                    "id": 3025632,
                    "image": "https://media.rawg.io/media/screenshots/8bd/8bd7bd62e1fe407f85d1fb43c3e6e996_LKjs3d9.jpg"
                },
                {
                    "id": 3025633,
                    "image": "https://media.rawg.io/media/screenshots/bb3/bb36624b591e6c11b01198b330928d2f.jpg"
                },
                {
                    "id": 3025634,
                    "image": "https://media.rawg.io/media/screenshots/4bf/4bfd17df6bf1a05d9145bbcc620c32e2.jpg"
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 3,
                        "name": "Xbox",
                        "slug": "xbox"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo",
                        "slug": "nintendo"
                    }
                }
            ],
            "genres": [

            ]
        }
    ],
    "user_platforms": false
};

//VIDEOGAMES de prueba para agregar a DataBase

const DBvideogames = [
    {
        "name": "Untitled Goose Game",
        "platforms": ["PC", "Xbox One", "PlayStation 4", "Nintendo Switch", "macOS"],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/games/199/1996ab6448cadb2ce4bea31536466333.jpg",
        "rating": 4.04,
        "genres": ["Indie", "Family", "Action", "Puzzle"]
    },
    {
        "name": "The Legend of Zelda: Link's Awakening (2019)",
        "platforms": [ "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/games/1bb/1bb38f1354db6596ccd6bdcb4a7f6cbc.jpg",
        "rating": 4.34,
        "genres": [ "Adventure", "Action", "RPG" ]
    },
    {
        "name": "Rebound Dodgeball Evolved",
        "platforms": [ "PC", "Xbox One" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/473/473172f068d52d9b26b589c3038f1ef4.jpg",
        "rating": 0.0,
        "genres": [ "Indie", "Sports" ]
    },
    {
        "name": "2048 Battles",
        "platforms": [ "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/d91/d914d9fcb4e243eeb80fd742a5a1bee5.jpg",
        "rating": 0.0,
        "genres": [ "Indie", "Sports" ]
    },
    {
        "name": "Detective Dolittle",
        "platforms": [ "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/0c9/0c9c41ad6ae42e9c8ff1fa25d4a400de.jpg",
        "rating": 0.0,
        "genres": [ "Indie", "Sports" ]
    },
    {
        "name": "Island Maze",
        "platforms": [ "PC", "Nintendo Switch", "macOS" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/982/98288b3a0a999644232a3b3583f6d8dd.jpg",
        "rating": 0.0,
        "genres": [ "Casual", "Indie" ]
    },
    {
        "name": "Talk it Out: Handheld Game",
        "platforms": [ "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/01b/01bc4fbd54c9453c90d2be7be7bf48f3.jpg",
        "rating": 0.0,
        "genres": [ "Casual", "Indie" ]
    },
    {
        "name": "Spellworm",
        "platforms": [ "PC", "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/a63/a635f3c0a9bd878f762e640b602cbbb2.jpg",
        "rating": 0.0,
        "genres": [ "Casual", "Indie" ]
    },
    {
        "name": "Hidden",
        "platforms": [ "PC",  "PlayStation 4", "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/ce8/ce83c6349af2205ef165f08ac046a600.jpg",
        "rating": 0.0,
        "genres": [ 
            "Adventure",
            "Action",
            "RPG",
            "Casual",
            "Strategy",
            "Simulation",
            "Sports",
            "Indie"
        ]
    }
];

//esto es para probar el front
export const oneGame = {
    "name": "Children of Morta",
    "platforms": [
        {
            "platform": {
                //"id": 4,
                "name": "PC",
                //"slug": "pc"
            }
        },
        {
            "platform": {
                //"id": 1,
                "name": "Xbox One",
                //"slug": "xbox-one"
            }
        },
        {
            "platform": {
                //"id": 18,
                "name": "PlayStation 4",
                //"slug": "playstation4"
            }
        },
        {
            "platform": {
                //"id": 7,
                "name": "Nintendo Switch",
                //"slug": "nintendo-switch"
            }
        },
        {
            "platform": {
                //"id": 5,
                "name": "macOS",
                //"slug": "macos"
            }
        },
        {
            "platform": {
                //"id": 6,
                "name": "Linux",
                //"slug": "linux"
            }
        }
    ],
    "released": "2019-09-03",
    "background_image": "https://media.rawg.io/media/games/434/43431e04f0cd5419a3d8e31a5c8c3d5d.jpg",
    "rating": 3.91,
    "genres": [
        {
            "id": 51,
            "name": "Indie",
            "slug": "indie"
        },
        {
            "id": 3,
            "name": "Adventure",
            "slug": "adventure"
        },
        {
            "id": 4,
            "name": "Action",
            "slug": "action"
        },
        {
            "id": 5,
            "name": "RPG",
            "slug": "role-playing-games-rpg"
        }
    ]
}

export default DBvideogames;