const quizData = [
    {
        id: 1,
        question: "If a car travels at a speed of 60 km/h, how far will it travel in 3 hours?",
        options: [
            { id: 11, value: "120 km", },
            { id: 12, value: "180 km" },
            { id: 13, value: "200 km" },
            { id: 14, value: "240 km" }
        ],
        answer: 12,
        type: "APTITUDE"
    },
    {
        id: 2,
        question: "If a recipe calls for 2 cups of flour and you have ½ cup, how many more cups do you need?",
        options: [
            { id: 21, value: "1 ½ cups" },
            { id: 22, value: "1 cup" },
            { id: 23, value: "½ cup" },
            { id: 24, value: "2 cups" }
        ],
        answer: 21,
        type: "APTITUDE"
    },
    {
        id: 3,
        question: "If a shirt costs $20 and is discounted by 25%, what is the discounted price?",
        options: [
            { id: 31, value: "$5" },
            { id: 32, value: "$10" },
            { id: 33, value: "$15" },
            { id: 34, value: "$20" }
        ],
        answer: 33,
        type: "APTITUDE"
    },
    {
        id: 4,
        question: "If a train travels at a speed of 50 km/h, how long will it take to travel 200 km?",
        options: [
            { id: 41, value: "2 hours" },
            { id: 42, value: "3 hours" },
            { id: 43, value: "4 hours" },
            { id: 44, value: "5 hours" }
        ],
        answer: 43,
        type: "APTITUDE"
    },
    {
        id: 5,
        question: "If a box contains 24 chocolates and you take 6 out, what percentage of chocolates do you have?",
        options: [
            { id: 51, value: "25%" },
            { id: 52, value: "33%" },
            { id: 53, value: "50%" },
            { id: 54, value: "75%" }
        ],
        answer: 54,
        type: "APTITUDE"
    },
    {
        id: 6,
        question: "If a store sells a shirt for $30 and makes a profit of 20%, how much did it cost to make the shirt?",
        options: [
            { id: 61, value: "$20" },
            { id: 62, value: "$24" },
            { id: 63, value: "$25" },
            { id: 64, value: "$28" }
        ],
        answer: 63,
        type: "APTITUDE"
    },
    {
        id: 7,
        question: "If an item costs $8 and is on sale for 25% off, what is the sale price?",
        options: [
            { id: 71, value: "$2" },
            { id: 72, value: "$4" },
            { id: 73, value: "$6" },
            { id: 74, value: "$8" }
        ],
        answer: 73,
        type: "APTITUDE"
    },
    {
        id: 8,
        question: "If a recipe calls for 2 cups of sugar and you have ½ cup, how many more cups do you need?",
        options: [
            { id: 81, value: "1 ½ cups" },
            { id: 82, value: "1 cup" },
            { id: 83, value: "½ cup" },
            { id: 84, value: "2 cups" }
        ],
        answer: 81,
        type: "APTITUDE"
    },
    {
        id: 9,
        question: "If a bus travels at a speed of 60 km/h, how long will it take to travel 180 km?",
        options: [
            { id: 91, value: "2 hours" },
            { id: 92, value: "3 hours" },
            { id: 93, value: "4 hours" },
            { id: 94, value: "5 hours" }
        ],
        answer: 92,
        type: "APTITUDE"
    },
    {
        id: 10,
        question: "If a book costs $20 and is discounted by 20%, what is the discounted price?",
        options: [
            { id: 101, value: "$4" },
            { id: 102, value: "$12" },
            { id: 103, value: "$16" },
            { id: 104, value: "$20" }
        ],
        answer: 103,
        type: "APTITUDE"
    },
    {
        id: 11,
        question: "If a ladder is 20 feet long and leans against a wall, with the base 10 feet away from the wall, how high up the wall does it reach?",
        options: [
            { id: 111, value: "10 feet" },
            { id: 112, value: "15 feet" },
            { id: 113, value: "20 feet" },
            { id: 114, value: "25 feet" }
        ],
        answer: 112,
        type: "APTITUDE"
    },
    {
        id: 12,
        question: "If a garden is 12 feet wide and 15 feet long, how many square feet is the garden?",
        options: [
            { id: 121, value: "27 sq ft" },
            { id: 122, value: "144 sq ft" },
            { id: 123, value: "180 sq ft" },
            { id: 124, value: "225 sq ft" }
        ],
        answer: 123,
        type: "APTITUDE"
    },
    {
        id: 13,
        question: "If a bag contains 40 marbles and you take out 20, what percentage of marbles do you have?",
        options: [
            { id: 131, value: "25%" },
            { id: 132, value: "40%" },
            { id: 133, value: "50%" },
            { id: 134, value: "75%" }
        ],
        answer: 133,
        type: "APTITUDE"
    },
    {
        id: 14,
        question: "If a train travels at a speed of 80 km/h, how far will it travel in 2.5 hours?",
        options: [
            { id: 141, value: "180 km" },
            { id: 142, value: "200 km" },
            { id: 143, value: "250 km" },
            { id: 144, value: "300 km" }
        ],
        answer: 142,
        type: "APTITUDE"
    },
    {
        id: 15,
        question: "If a box contains 30 chocolates and you take 10 out, what percentage of chocolates do you have?",
        options: [
            { id: 151, value: "25%" },
            { id: 152, value: "33%" },
            { id: 153, value: "50%" },
            { id: 154, value: "67%" }
        ],
        answer: 154,
        type: "APTITUDE"
    },
    {
        id: 16,
        question: "If a store sells a shirt for $25 and makes a profit of 25%, how much did it cost to make the shirt?",
        options: [
            { id: 161, value: "$15" },
            { id: 162, value: "$18" },
            { id: 163, value: "$20" },
            { id: 164, value: "$22" }
        ],
        answer: 163,
        type: "APTITUDE"
    },
    {
        id: 17,
        question: "If an item costs $10 and is on sale for 20% off, what is the sale price?",
        options: [
            { id: 171, value: "$2" },
            { id: 172, value: "$4" },
            { id: 173, value: "$6" },
            { id: 174, value: "$8" }
        ],
        answer: 174,
        type: "APTITUDE"
    },
    {
        id: 18,
        question: "If a recipe calls for 3 cups of flour and you have 1 ½ cups, how many more cups do you need?",
        options: [
            { id: 181, value: "1 ½ cups" },
            { id: 182, value: "2 cups" },
            { id: 183, value: "2 ½ cups" },
            { id: 184, value: "3 cups" }
        ],
        answer: 181,
        type: "APTITUDE"
    },
    {
        id: 19,
        question: "If a bus travels at a speed of 50 km/h, how long will it take to travel 100 km?",
        options: [
            { id: 191, value: "1 hour" },
            { id: 192, value: "2 hours" },
            { id: 193, value: "3 hours" },
            { id: 194, value: "4 hours" }
        ],
        answer: 192,
        type: "APTITUDE"
    },
    {
        id: 20,
        question: "If a book costs $15 and is discounted by 30%, what is the discounted price?",
        options: [
            { id: 201, value: "$4.50" },
            { id: 202, value: "$7.50" },
            { id: 203, value: "$10.50" },
            { id: 204, value: "$12" }
        ],
        answer: 203,
        type: "APTITUDE"
    },
    {
        id: 21,
        question: "If a ladder is 25 feet long and leans against a wall, with the base 15 feet away from the wall, how high up the wall does it reach?",
        options: [
            { id: 211, value: "10 feet" },
            { id: 212, value: "15 feet" },
            { id: 213, value: "20 feet" },
            { id: 214, value: "25 feet" }
        ],
        answer: 213,
        type: "APTITUDE"
    },
    {
        id: 22,
        question: "If a garden is 10 feet wide and 20 feet long, how many square feet is the garden?",
        options: [
            { id: 221, value: "100 sq ft" },
            { id: 222, value: "150 sq ft" },
            { id: 223, value: "200 sq ft" },
            { id: 224, value: "250 sq ft" }
        ],
        answer: 223,
        type: "APTITUDE"
    },
    {
        id: 23,
        question: "If a bag contains 50 marbles and you take out 25, what percentage of marbles do you have?",
        options: [
            { id: 231, value: "25%" },
            { id: 232, value: "33%" },
            { id: 233, value: "50%" },
            { id: 234, value: "75%" }
        ],
        answer: 233,
        type: "APTITUDE"
    },
    {
        id: 24,
        question: "If a train travels at a speed of 70 km/h, how far will it travel in 2 hours?",
        options: [
            { id: 241, value: "120 km" },
            { id: 242, value: "140 km" },
            { id: 243, value: "160 km" },
            { id: 244, value: "180 km" }
        ],
        answer: 242,
        type: "APTITUDE"
    },
    {
        id: 25,
        question: "If a box contains 36 chocolates and you take 18 out, what percentage of chocolates do you have?",
        options: [
            { id: 251, value: "25%" },
            { id: 252, value: "33%" },
            { id: 253, value: "50%" },
            { id: 254, value: "75%" }
        ],
        answer: 253,
        type: "APTITUDE"
    },
    {
        id: 26,
        question: "If a store sells a shirt for $30 and makes a profit of 20%, how much did it cost to make the shirt?",
        options: [
            { id: 261, value: "$20" },
            { id: 262, value: "$24" },
            { id: 263, value: "$25" },
            { id: 264, value: "$28" }
        ],
        answer: 263,
        type: "APTITUDE"
    },
    {
        id: 27,
        question: "If an item costs $6 and is on sale for 33% off, what is the sale price?",
        options: [
            { id: 271, value: "$2" },
            { id: 272, value: "$3" },
            { id: 273, value: "$4" },
            { id: 274, value: "$5" }
        ],
        answer: 273,
        type: "APTITUDE"
    },
    {
        id: 28,
        question: "If a recipe calls for 2 cups of sugar and you have ½ cup, how many more cups do you need?",
        options: [
            { id: 281, value: "1 ½ cups" },
            { id: 282, value: "1 cup" },
            { id: 283, value: "½ cup" },
            { id: 284, value: "2 cups" }
        ],
        answer: 281,
        type: "APTITUDE"
    },
    {
        id: 29,
        question: "If a bus travels at a speed of 60 km/h, how long will it take to travel 240 km?",
        options: [
            { id: 291, value: "2 hours" },
            { id: 292, value: "3 hours" },
            { id: 293, value: "4 hours" },
            { id: 294, value: "5 hours" }
        ],
        answer: 293,
        type: "APTITUDE"
    },
    {
        id: 30,
        question: "If a book costs $18 and is discounted by 20%, what is the discounted price?",
        options: [
            { id: 301, value: "$3.60" },
            { id: 302, value: "$7.20" },
            { id: 303, value: "$10.80" },
            { id: 304, value: "$14.40" }
        ],
        answer: 303,
        type: "APTITUDE"
    },
    {
        id: 31,
        question: "If all apples are fruits and some fruits are oranges, can we say all apples are oranges?",
        options: [
          { id: 311, value: "Yes" },
          { id: 312, value: "No" },
          { id: 313, value: "Maybe" },
          { id: 314, value: "Cannot be determined" }
        ],
        answer: 312,
        type: "LOGICAL"
      },
      {
        id: 32,
        question: "If some cats are black and all black animals are nocturnal, can we say some cats are nocturnal?",
        options: [
          { id: 321, value: "Yes" },
          { id: 322, value: "No" },
          { id: 323, value: "Maybe" },
          { id: 324, value: "Cannot be determined" }
        ],
        answer: 321,
        type: "LOGICAL"
      },
      {
        id: 33,
        question: "If all cars have wheels and bicycles have wheels, can we say all cars are bicycles?",
        options: [
          { id: 331, value: "Yes" },
          { id: 332, value: "No" },
          { id: 333, value: "Maybe" },
          { id: 334, value: "Cannot be determined" }
        ],
        answer: 332,
        type: "LOGICAL"
      },
      {
        id: 34,
        question: "If some squares are circles and all circles are shapes, can we say some shapes are squares?",
        options: [
          { id: 341, value: "Yes" },
          { id: 342, value: "No" },
          { id: 343, value: "Maybe" },
          { id: 344, value: "Cannot be determined" }
        ],
        answer: 341,
        type: "LOGICAL"
      },
      {
        id: 35,
        question: "If all triangles have three sides and some shapes have three sides, can we say all shapes are triangles?",
        options: [
          { id: 351, value: "Yes" },
          { id: 352, value: "No" },
          { id: 353, value: "Maybe" },
          { id: 354, value: "Cannot be determined" }
        ],
        answer: 352,
        type: "LOGICAL"
      },
      {
        id: 36,
        question: "If some birds can fly and all airplanes can fly, can we say all birds are airplanes?",
        options: [
          { id: 361, value: "Yes" },
          { id: 362, value: "No" },
          { id: 363, value: "Maybe" },
          { id: 364, value: "Cannot be determined" }
        ],
        answer: 362,
        type: "LOGICAL"
      },
      {
        id: 37,
        question: "If all roses are flowers and some flowers are red, can we say all roses are red?",
        options: [
          { id: 371, value: "Yes" },
          { id: 372, value: "No" },
          { id: 373, value: "Maybe" },
          { id: 374, value: "Cannot be determined" }
        ],
        answer: 372,
        type: "LOGICAL"
      },
      {
        id: 38,
        question: "If some books are novels and all novels are stories, can we say all books are stories?",
        options: [
          { id: 381, value: "Yes" },
          { id: 382, value: "No" },
          { id: 383, value: "Maybe" },
          { id: 384, value: "Cannot be determined" }
        ],
        answer: 381,
        type: "LOGICAL"
      },
      {
        id: 39,
        question: "If all dogs bark and some animals bark, can we say all dogs are animals?",
        options: [
          { id: 391, value: "Yes" },
          { id: 392, value: "No" },
          { id: 393, value: "Maybe" },
          { id: 394, value: "Cannot be determined" }
        ],
        answer: 391,
        type: "LOGICAL"
      },
      {
        id: 40,
        question: "If some pens are blue and all blue things are colorful, can we say some pens are colorful?",
        options: [
          { id: 401, value: "Yes" },
          { id: 402, value: "No" },
          { id: 403, value: "Maybe" },
          { id: 404, value: "Cannot be determined" }
        ],
        answer: 401,
        type: "LOGICAL"
      },
      {
        id: 41,
        question: "If all humans are mammals and some mammals can swim, can we say all humans can swim?",
        options: [
          { id: 411, value: "Yes" },
          { id: 412, value: "No" },
          { id: 413, value: "Maybe" },
          { id: 414, value: "Cannot be determined" }
        ],
        answer: 412,
        type: "LOGICAL"
      },
      {
        id: 42,
        question: "If some clouds are white and all white things are pure, can we say some clouds are pure?",
        options: [
          { id: 421, value: "Yes" },
          { id: 422, value: "No" },
          { id: 423, value: "Maybe" },
          { id: 424, value: "Cannot be determined" }
        ],
        answer: 421,
        type: "LOGICAL"
      },
      {
        id: 43,
        question: "If all chairs have legs and some tables have legs, can we say all tables are chairs?",
        options: [
          { id: 431, value: "Yes" },
          { id: 432, value: "No" },
          { id: 433, value: "Maybe" },
          { id: 434, value: "Cannot be determined" }
        ],
        answer: 432,
        type: "LOGICAL"
      },
      {
        id: 44,
        question: "If some birds are blue and all blue things are colorful, can we say some birds are colorful?",
        options: [
          { id: 441, value: "Yes" },
          { id: 442, value: "No" },
          { id: 443, value: "Maybe" },
          { id: 444, value: "Cannot be determined" }
        ],
        answer: 441,
        type: "LOGICAL"
      },
      {
        id: 45,
        question: "If all students study and some workers study, can we say all workers are students?",
        options: [
          { id: 451, value: "Yes" },
          { id: 452, value: "No" },
          { id: 453, value: "Maybe" },
          { id: 454, value: "Cannot be determined" }
        ],
        answer: 452,
        type: "LOGICAL"
      },
      {
        id: 46,
        question: "If some fish are yellow and all yellow things are bright, can we say some fish are bright?",
        options: [
          { id: 461, value: "Yes" },
          { id: 462, value: "No" },
          { id: 463, value: "Maybe" },
          { id: 464, value: "Cannot be determined" }
        ],
        answer: 461,
        type: "LOGICAL"
      },
      {
        id: 47,
        question: "If all trees have leaves and some plants have leaves, can we say all plants are trees?",
        options: [
          { id: 471, value: "Yes" },
          { id: 472, value: "No" },
          { id: 473, value: "Maybe" },
          { id: 474, value: "Cannot be determined" }
        ],
        answer: 472,
        type: "LOGICAL"
      },
      {
        id: 48,
        question: "If some trees are tall and all tall things are big, can we say some trees are big?",
        options: [
          { id: 481, value: "Yes" },
          { id: 482, value: "No" },
          { id: 483, value: "Maybe" },
          { id: 484, value: "Cannot be determined" }
        ],
        answer: 481,
        type: "LOGICAL"
      },
      {
        id: 49,
        question: "If all cars run on fuel and some vehicles run on fuel, can we say all vehicles are cars?",
        options: [
          { id: 491, value: "Yes" },
          { id: 492, value: "No" },
          { id: 493, value: "Maybe" },
          { id: 494, value: "Cannot be determined" }
        ],
        answer: 492,
        type: "LOGICAL"
      },
      {
        id: 50,
        question: "If some apples are green and all green things are fresh, can we say some apples are fresh?",
        options: [
          { id: 501, value: "Yes" },
          { id: 502, value: "No" },
          { id: 503, value: "Maybe" },
          { id: 504, value: "Cannot be determined" }
        ],
        answer: 501,
        type: "LOGICAL"
      },
    {
        id: 51,
        question: "If all cats purr and some animals purr, can we say all animals are cats?",
        options: [
          { id: 511, value: "Yes" },
          { id: 512, value: "No" },
          { id: 513, value: "Maybe" },
          { id: 514, value: "Cannot be determined" }
        ],
        answer: 512,
        type: "LOGICAL"
      },
      {
        id: 52,
        question: "If some birds can fly and all birds have feathers, can we say all birds with feathers can fly?",
        options: [
          { id: 521, value: "Yes" },
          { id: 522, value: "No" },
          { id: 523, value: "Maybe" },
          { id: 524, value: "Cannot be determined" }
        ],
        answer: 521,
        type: "LOGICAL"
      },
      {
        id: 53,
        question: "If all fruits are sweet and some vegetables are sweet, can we say all vegetables are fruits?",
        options: [
          { id: 531, value: "Yes" },
          { id: 532, value: "No" },
          { id: 533, value: "Maybe" },
          { id: 534, value: "Cannot be determined" }
        ],
        answer: 532,
        type: "LOGICAL"
      },
      {
        id: 54,
        question: "If some houses are white and all white things are clean, can we say some houses are clean?",
        options: [
          { id: 541, value: "Yes" },
          { id: 542, value: "No" },
          { id: 543, value: "Maybe" },
          { id: 544, value: "Cannot be determined" }
        ],
        answer: 541,
        type: "LOGICAL"
      },
      {
        id: 55,
        question: "If all stars are bright and some objects are bright, can we say all stars are objects?",
        options: [
          { id: 551, value: "Yes" },
          { id: 552, value: "No" },
          { id: 553, value: "Maybe" },
          { id: 554, value: "Cannot be determined" }
        ],
        answer: 552,
        type: "LOGICAL"
      },
      {
        id: 56,
        question: "If some shirts are blue and all blue things are colorful, can we say some shirts are colorful?",
        options: [
          { id: 561, value: "Yes" },
          { id: 562, value: "No" },
          { id: 563, value: "Maybe" },
          { id: 564, value: "Cannot be determined" }
        ],
        answer: 561,
        type: "LOGICAL"
      },
      {
        id: 57,
        question: "If all dogs bark and some animals bark, can we say all animals are dogs?",
        options: [
          { id: 571, value: "Yes" },
          { id: 572, value: "No" },
          { id: 573, value: "Maybe" },
          { id: 574, value: "Cannot be determined" }
        ],
        answer: 572,
        type: "LOGICAL"
      },
      {
        id: 58,
        question: "If some clouds are white and all white things are pure, can we say some clouds are pure?",
        options: [
          { id: 581, value: "Yes" },
          { id: 582, value: "No" },
          { id: 583, value: "Maybe" },
          { id: 584, value: "Cannot be determined" }
        ],
        answer: 581,
        type: "LOGICAL"
      },
      {
        id: 59,
        question: "If all planes can fly and some birds can fly, can we say all birds are planes?",
        options: [
          { id: 591, value: "Yes" },
          { id: 592, value: "No" },
          { id: 593, value: "Maybe" },
          { id: 594, value: "Cannot be determined" }
        ],
        answer: 592,
        type: "LOGICAL"
      },
      {
        id: 60,
        question: "If some apples are green and all green things are fresh, can we say some apples are fresh?",
        options: [
          { id: 601, value: "Yes" },
          { id: 602, value: "No" },
          { id: 603, value: "Maybe" },
          { id: 604, value: "Cannot be determined" }
        ],
        answer: 601,
        type: "LOGICAL"
      }
    ];


    export default quizData;