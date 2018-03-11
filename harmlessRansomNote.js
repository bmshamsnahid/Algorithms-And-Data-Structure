const harmlessRansomNotes = (noteText, magazineText) => {
  const noteArr = noteText.split(' '),
        magazineArr = magazineText.split(' ');

  let magazineObj = {};

  magazineArr.map((val) => {
    if (magazineArr[val]) magazineArr[val]++;
    else magazineArr[val] = 1;
  });

  let flag = true;

  noteArr.map((val) => {
    if (typeof magazineArr[val] == 'undefined' || magazineArr[val] <= 0) flag = false;
    else magazineArr[val]--;
  });

  return flag;
};

if (harmlessRansomNotes('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many  waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also secret that you must wear hiking boots this is one of the best places i have ever visited')) console.log('True');
else console.log('False');
