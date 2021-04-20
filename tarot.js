
        let IS_SHUFFLED = false;
        let flipCounter = 0;

        const theLeftSide = document.getElementById('leftSide');
        const theRightSide = document.getElementById('rightSide');
        const theRightSide01 = document.getElementById('rightSide01');
        const theRightSide02 = document.getElementById('rightSide02');
        const theRightSide03 = document.getElementById('rightSide03');
        const theRightSide04 = document.getElementById('rightSide04');
        const theRightSide05 = document.getElementById('rightSide05');
        const theRightSide06 = document.getElementById('rightSide06');
        const theRightSide07 = document.getElementById('rightSide07');
        const theRightSide08 = document.getElementById('rightSide08');
        const theRightSide09 = document.getElementById('rightSide09');
        const theRightSide10 = document.getElementById('rightSide10');
        const TAROT_DECK = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
            40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
            50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
            60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
            70, 71, 72, 73, 74, 75, 76, 77];
        const DECK_NAME = ['the-fool',
            'the-magician',
            'the-high-priestess',
            'the-empress',
            'the-emperor',
            'the-heirophant',
            'the-lovers',
            'the-chariot',
            'strength',
            'wheel-of-fortune',
            'justice',
            'the-hanged-man',
            'death',
            'temperance',
            'the-devil',
            'the-tower',
            'the-star',
            'the-moon',
            'the-sun',
            'the-hermit',
            'judgement',
            'the-world',
            'king-of-cups',
            'queen-of-cups',
            'knight-of-cups',
            'page-of-cups',
            'ten-of-cups',
            'nine-of-cups',
            'eight-of-cups',
            'seven-of-cups',
            'six-of-cups',
            'five-of-cups',
            'four-of-cups',
            'three-of-cups',
            'two-of-cups',
            'ace-of-cups',
            'king-of-swords',
            'queen-of-swords',
            'knight-of-swords',
            'page-of-swords',
            'ten-of-swords',
            'nine-of-swords',
            'eight-of-swords',
            'seven-of-swords',
            'six-of-swords',
            'five-of-swords',
            'four-of-swords',
            'three-of-swords',
            'two-of-swords',
            'ace-of-swords',
            'king-of-wands',
            'queen-of-wands',
            'knight-of-wands',
            'page-of-wands',
            'ten-of-wands',
            'nine-of-wands',
            'eight-of-wands',
            'seven-of-wands',
            'six-of-wands',
            'five-of-wands',
            'four-of-wands',
            'three-of-wands',
            'two-of-wands',
            'ace-of-wands',
            'king-of-pentacles',
            'queen-of-pentacles',
            'knight-of-pentacles',
            'page-of-pentacles',
            'ten-of-pentacles',
            'nine-of-pentacles',
            'eight-of-pentacles',
            'seven-of-pentacles',
            'six-of-pentacles',
            'five-of-pentacles',
            'four-of-pentacles',
            'three-of-pentacles',
            'two-of-pentacles',
            'ace-of-pentacles'
        ]

        function flipMe(src) {
            //$(".shuffleDeck").attr("src","image1.https://www.trustedtarot.com/images/small/back.gif");
            //console.log(src.getAttribute('data-src'));
            //src.src = src.getAttribute('data-src');
            let srcIndex = src.getAttribute('data-index');
            if (src.src === "https://www.trustedtarot.com/images/small/back.gif") {
                flipCounter += 1;
                if (flipCounter <= 10) {
                    src.src = "https://www.trustedtarot.com/img/cards/" + DECK_NAME[srcIndex] + ".png";
                    src.style = "position: relative;"
                        // duplicate in right div
                    //theLeftSide.removeChild(src);
                    switch (flipCounter) {
                        case 1:
                            theRightSide01.appendChild(src);
                            break;
                        case 2:
                            theRightSide02.appendChild(src);
                            break;
                        case 3:
                            theRightSide03.appendChild(src);
                            break;
                        case 4:
                            theRightSide04.appendChild(src);
                            break;
                        case 5:
                            theRightSide05.appendChild(src);
                            break;
                        case 6:
                            theRightSide06.appendChild(src);
                            break;
                        case 7:
                            theRightSide07.appendChild(src);
                            break;
                        case 8:
                            theRightSide08.appendChild(src);
                            break;
                        case 9:
                            theRightSide09.appendChild(src);
                            break;
                        case 10:
                            theRightSide10.appendChild(src);
                            break;
                    }

                }

            }
        }

        function showInitialCardPosition() {
            if (!(IS_SHUFFLED)) {
                shuffle(TAROT_DECK);
                //console.log(TAROT_DECK);
            }
            //$(".shuffleDeck").attr("src","image1.https://www.trustedtarot.com/images/small/back.gif");
            var images = document.getElementsByClassName("shuffleDeck");
            var leftPos = 00;
            var topPos = 100;
            for (var i = 0; i < images.length; i++) {
                //console.log(images[i].parentNode.id);
                
                console.log('substring: '+images[i].parentNode.id.substring(1,9));
                if (images[i].parentNode.id.substring(0,9) === "rightSide") {

                    theLeftSide.appendChild(images[i]);
                }
                images[i].src = "https://www.trustedtarot.com/img/cards/" + DECK_NAME[TAROT_DECK[i]] + ".png";

                images[i].style.position = '';
                images[i].style.top = '';
                images[i].style.left = '';

            }

        }
        function shuffleCardPosition() {

            shuffle(TAROT_DECK);
            //console.log(TAROT_DECK);
            //$(".shuffleDeck").attr("src","image1.https://www.trustedtarot.com/images/small/back.gif");

            var images = document.getElementsByClassName("shuffleDeck");
            var leftPos = 0;
            var topPos = 0;
            for (var i = 0; i < images.length; i++) {
                //console.log('substring: ' + images[i].id);
                node = images[i].id;
                console.log('substring: ' + node);
                parentN = document.getElementById(node).parentNode;
                console.log(parentN.id)
                //if (images[i].parentNode.id.substring(0,9) === "rightSide") {

                    theLeftSide.appendChild(images[i]);
                    //console.log(images[i].parentNode.id);
                    //console.log('substring: '+images[i].parentNode.id.substring(1,9));

                //}
                images[i].src = "https://www.trustedtarot.com/images/small/back.gif";
                images[i].setAttribute("data-index", TAROT_DECK[i])
                leftPos += 2;
                if (i > 0 && (i % 2) === 0) {
                    topPos += 10;
                    if ((i % 26) === 0) {
                        topPos = 10;
                        leftPos += 50;
                    }
                }
                else {
                    topPos += 10;
                }
                images[i].style.position = 'absolute';
                images[i].style.left = leftPos + "px";
                images[i].style.top = topPos + "px";
            }


        }
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            IS_SHUFFLED = true;
            flipCounter =0;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }