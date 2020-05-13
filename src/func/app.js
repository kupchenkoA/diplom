import dictionary from "./dict";
import decl from "./decl";

const unique = ["nebo", "oko", "uho", "děte", "člověk"];

export const main = (word) => {
  const checkUnique = unique.some((uniqueWord) => {
    return word == uniqueWord;
  });

  let uniqueResult = null;

  if (checkUnique) {
    decl.map((el) => {
      // el.ends = [{}, {}]
      el.ends.map((item) => {
        // item.end_key = ["", ""]
        item.end_key.map((end) => {
          // end = ""
          if (end == word) {
            uniqueResult = item;
            uniqueResult.sg = el.sg;
            uniqueResult.pl = el.pl;
            uniqueResult.origin_beginning = " ";
            uniqueResult.origin_end = " ";
          }
        });
      });
    });
    return { success: true, body: uniqueResult };
  } else {
    const index = dictionary.findIndex((e) => e.word === word);
    if (index >= 0) {
      const findWord = dictionary[index]; //word and its type

      //находим по гендеру
      const findDecl = decl.filter((el) => {
        return findWord.type == el.gender;
      })[0];

      let correctEnd = null;

      //если нашли такой гендер
      //console.log({ findDecl });

      if (findDecl) {
        // начинаем перебирать отрезая от конца 5, и отнимая 1 от 5 каждый цикл
        for (let index = 5; index > 0; index--) {
          // проверяем чтобы слово было длинней окончания
          if (word.length + 1 > index) {
            //корень при длинне index
            const original = word.substr(0, word.length - index);

            //окончание при длинне index
            const end = word.substr(-index);

            //перебираем объекты с окончаниями
            const findItem = findDecl.ends.filter((el) => {
              //пробуем найти правильное окончание
              const check = el.end_key.some((declEnd) => {
                //console.log(end);
                //console.log(declEnd);
                if (end == declEnd) {
                  //console.log("FIND");
                }

                return end.trim() == declEnd.trim();
              });
              //если находи правильное окончание то взвращае в массив
              if (check) {
                return el;
              }
            })[0];
            //console.log({ findItem });

            //если окончание найдено помещаем его в переменную correctEnd
            if (findItem) {
              correctEnd = findItem;
              correctEnd.sg = findDecl.sg;
              correctEnd.pl = findDecl.pl;
              correctEnd.origin_beginning = original;
              correctEnd.origin_end = end;
              break;
            }
          }
        }
        if (!correctEnd) {
          return { success: false, body: "Dont find correct end" };
        }

        return { success: true, body: correctEnd };
      } else {
        return { success: false, body: "Dont find correct gender" };
      }
    } else {
      return { success: false, body: "Cant find word" };
    }
  }
};

export const proposalFunc = async (word) => {
  let temp = [];
  for await (let item of dictionary) {
    const cut = item.word.substr(0, word.length);
    if (temp.length > 9) {
      break;
    }

    if (word.toLowerCase() == cut.toLowerCase()) {
      temp.push(item.word);
    }
  }
  return temp;
};
