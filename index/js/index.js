// var plot = document.getElementById("plotDiv"),
//   d3 = Plotly.d3,
//   data = [{"mode": "lines", "hoverinfo": "none", "y": [306.0, 234.0, null, 522.0, 450.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 90.0, 18.0, null, 90.0, 18.0, null, 90.0, 18.0, null, 162.0, 90.0, null, 162.0, 90.0, null, 306.0, 90.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 90.0, null, 234.0, 162.0, null, 162.0, 90.0, null, 234.0, 162.0, null, 162.0, 90.0, null, 162.0, 90.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 450.0, null, 306.0, 234.0, null, 378.0, 306.0, null, 450.0, 378.0, null, 450.0, 378.0, null, 450.0, 378.0, null, 450.0, 378.0, null, 162.0, 90.0, null, 162.0, 90.0, null, 90.0, 18.0, null, 90.0, 18.0, null, 234.0, 162.0, null, 306.0, 234.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 90.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 90.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 18.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 90.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 18.0, null, 378.0, 306.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 234.0, null, 234.0, 162.0, null, 522.0, 450.0, null, 306.0, 234.0, null, 234.0, 306.0, null, 450.0, 378.0, null, 450.0, 378.0, null, 450.0, 378.0, null, 450.0, 378.0, null, 234.0, 162.0, null, 306.0, 162.0, null, 306.0, 234.0, null, 522.0, 450.0, null, 522.0, 306.0, null, 522.0, 450.0, null, 522.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 378.0, 306.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 162.0, 90.0, null, 162.0, 90.0, null, 162.0, 90.0, null, 378.0, 306.0, null, 378.0, 306.0, null, 378.0, 234.0, null, 162.0, 90.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 522.0, 450.0, null, 522.0, 450.0, null, 90.0, 18.0, null, 90.0, 18.0, null, 162.0, 90.0, null, 522.0, 450.0, null, 162.0, 90.0, null, 162.0, 90.0, null, 162.0, 90.0, null, 234.0, 162.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 162.0, null, 306.0, 234.0, null, 378.0, 306.0, null, 378.0, 234.0, null, 234.0, 162.0, null, 306.0, 234.0, null, 234.0, 162.0, null, 306.0, 234.0, null, 90.0, 18.0, null, 90.0, 18.0, null, 90.0, 18.0, null, 90.0, 18.0, null, 378.0, 234.0, null, 378.0, 306.0, null, 306.0, 234.0, null, 378.0, 306.0, null, 378.0, 162.0, null, 234.0, 162.0, null, 306.0, 234.0, null, 378.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 162.0, null, 306.0, 234.0, null, 306.0, 162.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 162.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 90.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 162.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 162.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 306.0, 234.0, null, 378.0, 234.0, null, 234.0, 162.0, null, 234.0, 162.0, null, 162.0, 90.0, null, 162.0, 90.0, null, 306.0, 234.0, null, 162.0, 90.0, null], "x": [4287.4, 4172.4, null, 13520.0, 13643.0, null, 6550.4, 6550.4, null, 6550.4, 6369.4, null, 6550.4, 6690.4, null, 6725.4, 6819.4, null, 6725.4, 6725.4, null, 6725.4, 6612.4, null, 12942.0, 12865.0, null, 2693.4, 2177.4, null, 12974.0, 13049.0, null, 12974.0, 6369.4, null, 12974.0, 13189.0, null, 12974.0, 12865.0, null, 7568.4, 7667.4, null, 100.41, 2177.4, null, 13888.0, 14144.0, null, 14144.0, 14093.0, null, 14144.0, 14194.0, null, 4452.4, 4172.4, null, 13605.0, 13605.0, null, 13605.0, 13753.0, null, 13605.0, 13643.0, null, 4575.4, 4172.4, null, 10230.0, 10230.0, null, 13643.0, 13694.0, null, 13643.0, 13388.0, null, 13643.0, 13503.0, null, 13643.0, 13843.0, null, 12392.0, 12286.0, null, 12392.0, 12401.0, null, 12865.0, 13032.0, null, 12865.0, 12865.0, null, 7419.4, 7667.4, null, 4681.4, 4172.4, null, 14071.0, 14144.0, null, 4172.4, 5660.4, null, 4172.4, 1559.4, null, 4172.4, 4853.4, null, 4172.4, 2793.4, null, 4172.4, 5141.4, null, 4172.4, 1415.4, null, 4172.4, 6087.4, null, 4172.4, 5243.4, null, 4172.4, 1871.4, null, 4172.4, 4454.4, null, 4172.4, 3004.4, null, 4172.4, 5552.4, null, 4172.4, 3249.4, null, 4172.4, 4995.4, null, 4172.4, 1670.4, null, 4172.4, 3140.4, null, 4172.4, 3364.4, null, 4172.4, 388.41, null, 4172.4, 1773.4, null, 4172.4, 5771.4, null, 4172.4, 562.41, null, 4172.4, 2483.4, null, 4172.4, 1961.4, null, 4172.4, 3472.4, null, 4172.4, 6725.4, null, 4172.4, 4685.4, null, 4172.4, 2077.4, null, 4172.4, 744.41, null, 4172.4, 3587.4, null, 4172.4, 5924.4, null, 4172.4, 3697.4, null, 4172.4, 6768.4, null, 4172.4, 2196.4, null, 4172.4, 4306.4, null, 4172.4, 914.41, null, 4172.4, 6213.4, null, 4172.4, 243.41, null, 4172.4, 6345.4, null, 4172.4, 3444.4, null, 4172.4, 4172.4, null, 4172.4, 1072.4, null, 4172.4, 6517.4, null, 4172.4, 2341.4, null, 4172.4, 4045.4, null, 4172.4, 5397.4, null, 4172.4, 6638.4, null, 4172.4, 7306.4, null, 4172.4, 7200.4, null, 4172.4, 6902.4, null, 4172.4, 4576.4, null, 4172.4, 2177.4, null, 4172.4, 3856.4, null, 4172.4, 2883.4, null, 4172.4, 7034.4, null, 4172.4, 1246.4, null, 4172.4, 2586.4, null, 4172.4, 12865.0, null, 6567.4, 6550.4, null, 7792.4, 7667.4, null, 11935.0, 12049.0, null, 6369.4, 7461.4, null, 6369.4, 6369.4, null, 13753.0, 14144.0, null, 7363.4, 7453.4, null, 13201.0, 13189.0, null, 12170.0, 10230.0, null, 7453.4, 8022.4, null, 7453.4, 5648.4, null, 7453.4, 4153.4, null, 7453.4, 9501.4, null, 14218.0, 14144.0, null, 5405.4, 7200.4, null, 5405.4, 4172.4, null, 7453.4, 7453.4, null, 13929.0, 13605.0, null, 13929.0, 13643.0, null, 13929.0, 14144.0, null, 14385.0, 14144.0, null, 6808.4, 7667.4, null, 6808.4, 7200.4, null, 8022.4, 10230.0, null, 12387.0, 12540.0, null, 12387.0, 12392.0, null, 4757.4, 4172.4, null, 4877.4, 4172.4, null, 12657.0, 13049.0, null, 12657.0, 6725.4, null, 12657.0, 12865.0, null, 9397.4, 10230.0, null, 12456.0, 10230.0, null, 12456.0, 13189.0, null, 2483.4, 2177.4, null, 5022.4, 4172.4, null, 3598.4, 4172.4, null, 13189.0, 13533.0, null, 13189.0, 12815.0, null, 13189.0, 13263.0, null, 13189.0, 12942.0, null, 13189.0, 13397.0, null, 13643.0, 13643.0, null, 13749.0, 13643.0, null, 13049.0, 13032.0, null, 13049.0, 12865.0, null, 5552.4, 4995.4, null, 7580.4, 7453.4, null, 1871.4, 2177.4, null, 13083.0, 13049.0, null, 13083.0, 12865.0, null, 6954.4, 7667.4, null, 3745.4, 4172.4, null, 12254.0, 13377.0, null, 12254.0, 12049.0, null, 12254.0, 4172.4, null, 11060.0, 10230.0, null, 11060.0, 13189.0, null, 14560.0, 14144.0, null, 13377.0, 13377.0, null, 14690.0, 14144.0, null, 3853.4, 4172.4, null, 2177.4, 2034.4, null, 2177.4, 2308.4, null, 2177.4, 3444.4, null, 2177.4, 2177.4, null, 6436.4, 6369.4, null, 6436.4, 6550.4, null, 3949.4, 4172.4, null, 13388.0, 13605.0, null, 13388.0, 14144.0, null, 12049.0, 12049.0, null, 4057.4, 4172.4, null, 4153.4, 4172.4, null, 4172.4, 4172.4, null, 10230.0, 9156.4, null, 10230.0, 8975.4, null, 10230.0, 12815.0, null, 10230.0, 10569.0, null, 10230.0, 7667.4, null, 10230.0, 9064.4, null, 10230.0, 11935.0, null, 10230.0, 10711.0, null, 10230.0, 9618.4, null, 10230.0, 9719.4, null, 10230.0, 7568.4, null, 10230.0, 12170.0, null, 10230.0, 8617.4, null, 10230.0, 12559.0, null, 10230.0, 9830.4, null, 10230.0, 9937.4, null, 10230.0, 9391.4, null, 10230.0, 12683.0, null, 10230.0, 11189.0, null, 10230.0, 11321.0, null, 10230.0, 13189.0, null, 10230.0, 8736.4, null, 10230.0, 7306.4, null, 10230.0, 10428.0, null, 10230.0, 11437.0, null, 10230.0, 8859.4, null, 10230.0, 12286.0, null, 10230.0, 8503.4, null, 10230.0, 10037.0, null, 10230.0, 10159.0, null, 10230.0, 9507.4, null, 10230.0, 12657.0, null, 10230.0, 12814.0, null, 10230.0, 11567.0, null, 10230.0, 11051.0, null, 10230.0, 9277.4, null, 10230.0, 7122.4, null, 10230.0, 8358.4, null, 10230.0, 7958.4, null, 10230.0, 11700.0, null, 10230.0, 10300.0, null, 10230.0, 8055.4, null, 10230.0, 8147.4, null, 10230.0, 8254.4, null, 10230.0, 12387.0, null, 10230.0, 12540.0, null, 10230.0, 10824.0, null, 10230.0, 10930.0, null, 10230.0, 11818.0, null, 5648.4, 4172.4, null, 7272.4, 7667.4, null, 14815.0, 14144.0, null, 12540.0, 12536.0, null, 12540.0, 12670.0, null, 6353.4, 6369.4, null, 4995.4, 4995.4, null], "line": {"color": "#888", "width": 0.5}, "type": "scatter"}, {"connections": [[], [], [], [], [], [], [], ["Doom Metal", "Death Metal", "Funeral Doom", "Gothic Metal"], ["Industrial", "Hip Hop", "Illbient", "Witch House", "Gabber"], [], [], [], [], ["Latin American Music", "Reggaeton", "Hip Hop"], [], [], [], [], [], [], [], [], [], ["Psychedelic Rock", "Acid Trance", "Dream Trance", "Trance", "Eurodance", "Techno", "Hard Trance", "Goa Trance", "Psychedelia", "Indian Classical Music", "Psybient", "Psydub"], [], [], [], ["Funk", "Synthpop", "New Wave"], [], ["Trance", "Techno", "Hard House", "Tech House", "Hard Trance"], [], [], [], [], [], ["House", "Techno", "Deep House", "Minimal Techno", "Electro House", "Trance", "Vocal Trance", "Hardcore Techno"], [], [], ["Hardcore Punk", "Skate Punk", "Easycore"], ["Industrial Rock", "Heavy Metal", "Black Metal", "Industrial", "Neue Deutsche H\\u00e4rte", "Nu Metal"], [], [], [], [], [], [], [], [], [], [], [], [], ["Griot", "Reggae", "The Dozens", "Toasting", "Signifyin\'", "Spoken Word", "Jazz", "Dancehall", "Disco", "Rhythm And Blues", "Electronic Music", "Rock", "Performance Poetry", "Talking Blues", "Scat Singing", "Dub", "Funk", "Rap Metal", "Mafioso Rap", "Instrumental Hip Hop", "Rap Opera", "Emo Rap", "Ragga", "Rap Rock", "Jerkin\'", "Oldschool Jungle", "Bounce", "Glitch Hop", "Alternative Hip Hop", "Pop-Rap", "New Jack Swing", "Merenrap", "Hyphy", "Jazz Rap", "Hardcore Hip Hop", "Ghettotech", "Neo Soul", "Cumbia Rap", "Crunk", "Grime", "Industrial Hip Hop", "Homo Hop", "Nerdcore", "Native American Hip Hop", "Grebo", "Hiplife", "Nu Metal", "Trip Hop", "Reggaeton", "Freestyle Rap", "Conscious Hip Hop", "Gangsta Rap", "Wonky", "Hip House", "Baltimore Club", "Hip Hop Soul", "Breakbeat", "Breakbeat Hardcore", "Brick City Club", "Big Beat", "Chicano Rap", "Political Hip Hop", "Electro", "Nu Metalcore", "Country Rap", "Christian Hip Hop", "Low Bap", "Nuyorican Rap", "Psychedelic Hip Hop", "Miami Bass", "Trap", "Experimental Hip Hop", "Horrorcore"], [], [], [], ["Neotraditional Country", "Punk Rock", "Country", "Alternative Rock", "Progressive Country", "Country Rock", "Outlaw Country"], [], [], [], [], ["Heavy Metal", "Gothic Rock", "Death-Doom", "Doom Metal", "Symphonic Gothic Metal", "Gothic Black Metal"], [], [], [], [], [], ["Boogie-Woogie", "Ragtime", "Blues", "Rock And Roll", "Jazz", "Rhythm And Blues", "Swing"], [], [], [], [], [], [], [], ["Soul", "Funk"], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["Country", "Hip Hop", "Rock"], ["Pub Rock", "Heavy Metal", "Progressive Rock", "Hard Rock", "Punk Rock", "Power Metal", "Thrash Metal", "Street Punk", "Speed Metal", "Black Metal"], [], [], [], ["Industrial Rock", "Heavy Metal", "Industrial", "Neue Deutsche H\\u00e4rte", "Nu Metal"], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["Crunk", "Hip Hop", "West Coast Hip Hop", "G-Funk", "Bounce", "Trap Music (Edm)", "Trap Music (Hip Hop)", "Wonky", "Rnbass"], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], ["Pub Rock", "Glam Punk", "Rock And Roll", "Proto-Punk", "Garage Rock", "Hard Rock", "Skate Punk", "Horror Punk", "Crust Punk", "Ska Punk", "Indie Pop", "Oi!", "Noise Rock", "Avant-Punk", "Christian Punk", "Art Punk", "Deathrock", "Nwobhm", "Anti-Folk", "Rapcore", "Celtic Punk", "Electropunk", "Anarcho-Punk", "Post-Punk", "2 Tone", "Grebo", "Grunge", "Garage Rock", "Surf Punk Punk", "Hardcore Punk", "Queercore", "Psychobilly", "Punk Blues", "Dance-Punk", "Punk Jazz", "Gypsy Punk", "Dark Cabaret", "New Wave", "Riot Grrrl", "Indie Rock", "Industrial", "Taqwacore", "No Wave", "Chicano Punk", "Folk Punk", "Cowpunk", "Pop Punk", "Alternative Rock", "Trapunk", "Post-Hardcore", "Street Punk", "Emo"], [], [], [], [], [], [], [], [], [], [], [], [], [], ["Hardcore Punk", "Punk Rock", "Powerviolence", "Grindcore"], [], [], [], [], []], "marker": {"reversescale": true, "colorscale": "YIOrRd", "color": [0, 0, 0, 0, 0, 0, 0, 14.771212547196624, 16.020599913279625, 0, 0, 0, 0, 10.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14.771212547196624, 0, 0, 0, 10.0, 0, 16.020599913279625, 0, 0, 0, 0, 0, 16.989700043360187, 0, 0, 14.771212547196624, 14.771212547196624, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27.558748556724915, 0, 0, 0, 10.0, 0, 0, 0, 0, 14.771212547196624, 0, 0, 0, 0, 0, 16.989700043360187, 0, 0, 0, 0, 0, 0, 0, 10.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10.0, 17.78151250383644, 0, 0, 0, 14.771212547196624, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16.989700043360187, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26.720978579357176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14.771212547196624, 0, 0, 0, 0, 0], "colorbar": {"xanchor": "left", "title": "Subgenres", "ticks": "outside", "thickness": 12, "ticktext": ["External", "0"], "titleside": "right", "tickvals": [0.0, 1.0]}, "showscale": true, "line": {"width": 2}, "size": 15}, "x": [13397.0, 7461.4, 4287.4, 4853.4, 13520.0, 5141.4, 5243.4, 6550.4, 6725.4, 5397.4, 13032.0, 12942.0, 2693.4, 4995.4, 12974.0, 5660.4, 7568.4, 100.41, 5771.4, 12559.0, 14093.0, 12683.0, 13888.0, 14144.0, 5924.4, 4452.4, 6087.4, 12049.0, 6213.4, 13605.0, 6345.4, 3444.4, 4575.4, 12814.0, 10230.0, 13643.0, 6517.4, 7122.4, 12392.0, 12865.0, 7419.4, 6638.4, 7958.4, 6768.4, 8055.4, 6902.4, 8147.4, 4681.4, 13694.0, 8254.4, 8358.4, 14071.0, 4172.4, 7034.4, 8503.4, 6567.4, 7667.4, 7792.4, 243.41, 11935.0, 2034.4, 6369.4, 13753.0, 7363.4, 388.41, 13201.0, 12170.0, 7453.4, 8617.4, 562.41, 6550.4, 744.41, 8736.4, 7306.4, 8859.4, 13377.0, 8975.4, 9064.4, 914.41, 14218.0, 9156.4, 5405.4, 7453.4, 13929.0, 1072.4, 9277.4, 14385.0, 2177.4, 13843.0, 6808.4, 8022.4, 12387.0, 9501.4, 9391.4, 1246.4, 4757.4, 12865.0, 4877.4, 12657.0, 9397.4, 1415.4, 12401.0, 9507.4, 13605.0, 13533.0, 1559.4, 1670.4, 9618.4, 12456.0, 6612.4, 9719.4, 12536.0, 1773.4, 2483.4, 9830.4, 9937.4, 1961.4, 5022.4, 12815.0, 2077.4, 3598.4, 7200.4, 13189.0, 13643.0, 13749.0, 2196.4, 13049.0, 2341.4, 5552.4, 10037.0, 10159.0, 7580.4, 1871.4, 13083.0, 6954.4, 3745.4, 12254.0, 12670.0, 11060.0, 10300.0, 14560.0, 13377.0, 10428.0, 14690.0, 10569.0, 10711.0, 10824.0, 10930.0, 2586.4, 12286.0, 3853.4, 2793.4, 11051.0, 2883.4, 3004.4, 3140.4, 6725.4, 3249.4, 6819.4, 3364.4, 2177.4, 6436.4, 3949.4, 13388.0, 13263.0, 3472.4, 13503.0, 12049.0, 4057.4, 11189.0, 11321.0, 3587.4, 3697.4, 4153.4, 11437.0, 4172.4, 10230.0, 5648.4, 3856.4, 4045.4, 4172.4, 7272.4, 11567.0, 14815.0, 11700.0, 4306.4, 11818.0, 4454.4, 4576.4, 6690.4, 12540.0, 4685.4, 6353.4, 14194.0, 4995.4, 2308.4], "mode": "markers", "hoverinfo": "text", "y": [162.0, 162.0, 306.0, 162.0, 522.0, 162.0, 162.0, 306.0, 90.0, 162.0, 18.0, 162.0, 162.0, 90.0, 306.0, 162.0, 234.0, 162.0, 162.0, 234.0, 90.0, 234.0, 234.0, 162.0, 162.0, 306.0, 162.0, 162.0, 162.0, 306.0, 162.0, 18.0, 306.0, 234.0, 378.0, 450.0, 162.0, 234.0, 162.0, 90.0, 234.0, 162.0, 234.0, 162.0, 234.0, 162.0, 234.0, 306.0, 378.0, 234.0, 234.0, 234.0, 234.0, 162.0, 234.0, 378.0, 162.0, 234.0, 162.0, 234.0, 18.0, 234.0, 234.0, 522.0, 162.0, 306.0, 234.0, 450.0, 234.0, 162.0, 234.0, 162.0, 234.0, 162.0, 234.0, 234.0, 234.0, 234.0, 162.0, 234.0, 234.0, 306.0, 522.0, 522.0, 162.0, 234.0, 234.0, 18.0, 378.0, 234.0, 378.0, 234.0, 378.0, 234.0, 162.0, 306.0, 18.0, 306.0, 162.0, 378.0, 162.0, 90.0, 234.0, 234.0, 162.0, 162.0, 162.0, 234.0, 378.0, 18.0, 234.0, 90.0, 162.0, 162.0, 234.0, 234.0, 162.0, 306.0, 162.0, 162.0, 306.0, 162.0, 234.0, 522.0, 522.0, 162.0, 90.0, 162.0, 162.0, 234.0, 234.0, 522.0, 162.0, 162.0, 234.0, 306.0, 306.0, 90.0, 378.0, 234.0, 234.0, 306.0, 234.0, 234.0, 234.0, 234.0, 234.0, 234.0, 162.0, 90.0, 306.0, 162.0, 234.0, 162.0, 162.0, 162.0, 18.0, 162.0, 18.0, 162.0, 90.0, 378.0, 306.0, 378.0, 162.0, 162.0, 378.0, 234.0, 306.0, 234.0, 234.0, 162.0, 162.0, 378.0, 234.0, 306.0, 306.0, 378.0, 162.0, 162.0, 162.0, 234.0, 234.0, 234.0, 234.0, 162.0, 234.0, 162.0, 162.0, 234.0, 162.0, 162.0, 306.0, 90.0, 162.0, 18.0], "text": ["Power Metal", "Symphonic Gothic Metal", "Spoken Word", "Ragga", "Minimal Techno", "Jerkin\'", "Rap Opera", "Death-Doom<br>2 subgenres", "Industrial Hip Hop<br>3 subgenres", "Psychedelic Hip Hop", "Neue Deutsche H\\u00e4rte", "Black Metal", "G-Funk", "Alternative Reggaeton<br>0 subgenres", "Heavy Metal", "Trip Hop", "Alternative Rock", "West Coast Hip Hop", "Ghettotech", "Deathrock", "Psybient", "Electropunk", "Goa Trance", "Psychedelic Trance<br>2 subgenres", "Alternative Hip Hop", "Dancehall", "Nu Metalcore", "Synth-Funk<br>0 subgenres", "Rap Metal", "Tech Trance<br>3 subgenres", "Baltimore Club", "Wonky", "Scat Singing", "Psychobilly", "Proto-Punk", "Tech House<br>4 subgenres", "Breakbeat", "Chicano Punk", "Melodic Hardcore<br>2 subgenres", "Industrial Black Metal<br>2 subgenres", "Country Rock", "Miami Bass", "Crust Punk", "Mafioso Rap", "Emo", "Freestyle Rap", "Cowpunk", "Disco", "Hardcore Techno", "Art Punk", "No Wave", "Psychedelic Rock", "Hip Hop<br>56 subgenres", "Gangsta Rap", "Ska Punk", "Death Metal", "Alternative Country<br>0 subgenres", "Neotraditional Country", "Big Beat", "New Wave", "Trap Music (Hip Hop)", "Gothic Black Metal<br>2 subgenres", "Hard Trance", "Blues", "Breakbeat Hardcore", "Progressive Rock", "Garage Rock", "Piano Blues<br>4 subgenres", "Indie Rock", "New Jack Swing", "Funeral Doom", "Experimental Hip Hop", "Noise Rock", "Grebo", "Celtic Punk", "Go-Go<br>0 subgenres", "Riot Grrrl", "Oi!", "Hip Hop Soul", "Acid Trance", "Pop Punk", "Rock", "Ragtime", "Techno", "Conscious Hip Hop", "Dance-Punk", "Indian Classical Music", "Rnbass", "Vocal Trance", "Country", "Rock And Roll", "Hardcore Punk", "Swing", "Rapcore", "Oldschool Jungle", "Dub", "Nu Metal", "Electronic Music", "Industrial", "Glam Punk", "Christian Hip Hop", "Easycore", "Dark Cabaret", "Hard House", "Thrash Metal", "Homo Hop", "Neo Soul", "2 Tone", "Hard Rock", "Witch House", "Folk Punk", "Powerviolence", "Jazz Rap", "Crunk", "Nwobhm", "Anti-Folk", "Grime", "The Dozens", "Street Punk", "Nuyorican Rap", "Performance Poetry", "Country Rap<br>0 subgenres", "New Wave Of British Heavy Metal<br>5 subgenres", "House", "Deep House", "Hiplife", "Industrial Metal<br>2 subgenres", "Instrumental Hip Hop", "Reggaeton", "Grunge", "Christian Punk", "Boogie-Woogie", "Bounce", "Industrial Rock", "Progressive Country", "Toasting", "Funk", "Grindcore", "Pub Rock", "Horror Punk", "Dream Trance", "Soul", "Punk Blues", "Eurodance", "Surf Punk Punk", "Avant-Punk", "Trapunk", "Indie Pop", "Horrorcore", "Skate Punk", "Signifyin\'", "Nerdcore", "Gypsy Punk", "Trap", "Hardcore Hip Hop", "Pop-Rap", "Gabber", "Glitch Hop", "Illbient", "Merenrap", "Hyphy<br>4 subgenres", "Doom Metal", "Griot", "Trance", "Speed Metal", "Rap Rock", "Electro House", "Synthpop", "Talking Blues", "Anarcho-Punk", "Post-Punk", "Cumbia Rap", "Electro", "Rhythm And Blues", "Punk Jazz", "Reggae", "Punk Rock<br>46 subgenres", "Jazz", "Native American Hip Hop", "Brick City Club", "Low Bap", "Outlaw Country", "Post-Hardcore", "Psychedelia", "Taqwacore", "Political Hip Hop", "Queercore", "Chicano Rap", "Hip House", "Gothic Metal", "Thrashcore<br>2 subgenres", "Emo Rap", "Gothic Rock", "Psydub", "Latin American Music", "Trap Music (Edm)"], "type": "scatter"}],
//   layout = {
//     showlegend: false,
//     title: "<br>Music Genre Network Graph",
//     yaxis: { zeroline: false, showticklabels: false, showgrid: false },
//     titlefont: { size: 16 },
//     xaxis: { zeroline: false, showticklabels: false, showgrid: false },
//     hovermode: "closest",
//     margin: { r: 5, b: 20, t: 40, l: 5 }
//   };

function arrayFlip(trans) {

  var key;
  var tmp = {};

  for (key in trans) {
    if (trans.hasOwnProperty(key)) {
      tmp[trans[key].split("<br>")[0]] = key;
    }
  }

  return tmp;
}

function getConnections(connections, data) {
  var childrenPoints = [];

  for (var i = 0; i < connections.length; i++) {
    childrenPoints.push(data[connections[i]]);
  }

  return childrenPoints;
}

plot = Plotly.d3.json("out_data.json", function(err, fig) {

  Plotly.plot('plotDiv', fig.data, fig.layout);

});

// Plotly.newPlot("plotDiv", data, layout);

plot.on("plotly_hover", function(eventdata) {

  var points = eventdata.points[0];
  var pointNum = points.pointNumber;
  var curveNum = points.curveNumber;
  var connections = points.data.connections[pointNum];
  var allData = arrayFlip(eventdata.points[0].data.text);
  var childrenPoints = getConnections(connections, allData);

  var curves = [{ curveNumber: curveNum, pointNumber: pointNum }];

  for (var point = 0; point < childrenPoints.length; point++) {
    curves.push({ curveNumber: curveNum, pointNumber: childrenPoints[point] });
  }

  Plotly.Fx.hover("plotDiv", curves);

});