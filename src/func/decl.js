const items = [
  {
    gender: "m.anim.",
    sg: true,
    pl: true, // тут написать как в словаре
    ends: [
      {
        end_key: [
          "d",
          "t",
          "m",
          "n",
          "r",
          "l",
          "p",
          "b",
          "f",
          "v",
          "s",
          "z",
          "š",
          "ž",
          "č",
          "c"
        ],
        //тут может быть больше одного

        nom_sg: { body: " " },
        acc_sg: { body: "a" },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "e" }, //добавить сut: true если надо

        nom_pl: { body: "y" },
        acc_pl: { body: "ov" },

        gen_pl: { body: "ov" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "y" },
      },

      {
        end_key: ["člověk"], //тут может быть больше одного
        nom_sg: { body: "člověk" },
        acc_sg: { body: "člověka" },
        gen_sg: { body: "člověka" },
        dat_sg: { body: "člověku" },
        ins_sg: { body: "člověkom" },
        loc_sg: { body: "člověku" },
        voc_sg: { body: "člověke" }, //добавить сut: true если надо

        nom_pl: { body: "ljudi" },
        acc_pl: { body: "ljudi" },
        gen_pl: { body: "ljudij" },
        dat_pl: { body: "ljudam" },
        ins_pl: { body: "ljudami" },
        loc_pl: { body: "ljudah" },
        voc_pl: { body: "ljudi" },
      },
      {
        end_key: ["y"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "ogo" , cut: true },
        gen_sg: { body: "ogo", cut: true },
        dat_sg: { body: "omy", cut: true },
        ins_sg: { body: "um" , cut: true},
        loc_sg: { body: "omy", cut: true },
        voc_sg: { body: " " }, //добавить сut: true если надо

        nom_pl: { body: "i", cut: true },
        acc_pl: { body: "ih" , cut: true},
        gen_pl: { body: "ih" , cut: true},
        dat_pl: { body: "im" , cut: true},
        ins_pl: { body: "imi", cut: true },
        loc_pl: { body: "im" , cut: true},
        voc_pl: { body: "i" , cut: true},
      },

      {
        end_key: ["k"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "a " },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "če", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "y" },
        acc_pl: { body: "ov" },
        gen_pl: { body: "ov" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "y" },
      },
      

      {
        end_key: ["h"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "a " },
        get_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "še", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "i" },
        acc_pl: { body: "ov" },
        gen_pl: { body: "ov" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "i" },
      },

      {
        end_key: ["g"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "a " },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "že", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "i" },
        acc_pl: { body: "ov" },
        gen_pl: { body: "ov" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "i" },
      },

      {
        end_key: ["ec", "oc"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "ca ", cut: true },
        gen_sg: { body: "ca", cut: true },
        dat_sg: { body: "cu", cut: true },
        ins_sg: { body: "cem", cut: true },
        loc_sg: { body: "cu", cut: true },
        voc_sg: { body: "če", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "ci", cut: true },
        acc_pl: { body: "cev", cut: true },

        gen_pl: { body: "cev", cut: true },
        dat_pl: { body: "cam", cut: true },
        ins_pl: { body: "cami", cut: true },
        loc_pl: { body: "cah", cut: true },
        voc_pl: { body: "ci", cut: true },
      },

      {
        end_key: ["el", "ol"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "la ", cut: true },
        gen_sg: { body: "la", cut: true },
        dat_sg: { body: "lu", cut: true },
        ins_sg: { body: "lom", cut: true },
        loc_sg: { body: "lu", cut: true },
        voc_sg: { body: "le", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "li", cut: true },
        acc_pl: { body: "lov", cut: true },

        gen_pl: { body: "lov", cut: true },
        dat_pl: { body: "lam", cut: true },
        ins_pl: { body: "lami", cut: true },
        loc_pl: { body: "lah", cut: true },
        voc_pl: { body: "li", cut: true },
      },

      {
        end_key: ["ok", "ek"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "ka ", cut: true },
        gen_sg: { body: "ka", cut: true },
        dat_sg: { body: "ku", cut: true },
        ins_sg: { body: "kom", cut: true },
        loc_sg: { body: "ku", cut: true },
        voc_sg: { body: "če", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "ki", cut: true },
        acc_pl: { body: "kov", cut: true },
        gen_pl: { body: "kov", cut: true },
        dat_pl: { body: "kam", cut: true },
        ins_pl: { body: "kami", cut: true },
        loc_pl: { body: "kah", cut: true },
        voc_pl: { body: "ki", cut: true },
      },
      {
        end_key: ["a"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "u", cut: true },
        gen_sg: { body: "y", cut: true },
        dat_sg: { body: "ě", cut: true },
        ins_sg: { body: "oju", cut: true },
        loc_sg: { body: "ě", cut: true },
        voc_sg: { body: "o", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "i", cut: true },
        acc_pl: { body: " ", cut: true },
        gen_pl: { body: " ", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: "i", cut: true },
      },

      {
        end_key: [
          "š",
          "ž",
          "č",
          "ć",
          "đ",
          "ń",
          "ľ",
          "ŕ",
          "ť",
          "ď",
          "ś",
          "ź",
          "j",
        ], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "a " },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "em" },
        loc_sg: { body: "u" },
        voc_sg: { body: "u" }, //добавить сut: true если надо

        nom_pl: { body: "i" },
        acc_pl: { body: "ev" },
        gen_pl: { body: "ev" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "i" },
      },
    ],
  },

  {
    gender: "m.",
    sg: true,
    pl: true,
    ends: [
      {
        end_key: ["k"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "če", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "i" },
        acc_pl: { body: "ov" },
        gen_pl: { body: "ov" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "i" },
      },
      {
        end_key: ["ec", "oc"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "ca ", cut: true },
        gen_sg: { body: "ca", cut: true },
        dat_sg: { body: "cu", cut: true },
        ins_sg: { body: "cem", cut: true },
        loc_sg: { body: "cu", cut: true },
        voc_sg: { body: "če", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "ci", cut: true },
        acc_pl: { body: "cev", cut: true },

        gen_pl: { body: "cev", cut: true },
        dat_pl: { body: "cam", cut: true },
        ins_pl: { body: "cami", cut: true },
        loc_pl: { body: "cah", cut: true },
        voc_pl: { body: "ci", cut: true },
      },
      {
        end_key: ["h"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "še", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "y" },
        acc_pl: { body: "y" },
        gen_pl: { body: "ov" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "i" },
      },

      {
        end_key: ["g"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "že", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "y" },
        acc_pl: { body: "y" },
        gen_pl: { body: "ov" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "i" },
      },

      {
        end_key: [
          "š",
          "ž",
          "č",
          "ć",
          "đ",
          "ń",
          "ľ",
          "ŕ",
          "ť",
          "ď",
          "ś",
          "ź",
          "j",
        ], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "a " },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "em" },
        loc_sg: { body: "u" },
        voc_sg: { body: "u" }, //добавить сut: true если надо

        nom_pl: { body: "i" },
        acc_pl: { body: "ev" },
        gen_pl: { body: "ev" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "i" },
      },

      {
        end_key: [
          "d",
          "t",
          "m",
          "n",
          "r",
          "l",
          "p",
          "b",
          "f",
          "v",
          "s",
          "z",
          "š",
          "ž",
          "č",
          "c"
        ],
        //тут может быть больше одного

        nom_sg: { body: " " },
        acc_sg: { body: "a" },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "e" }, //добавить сut: true если надо

        nom_pl: { body: "y" },
        acc_pl: { body: "ov" },

        gen_pl: { body: "ov" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "y" },
      },
    ],
  },

  {
    gender: "f.",
    sg: true,
    pl: true,
    ends: [
      {
        end_key: ["a"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "u", cut: true },
        gen_sg: { body: "y", cut: true },
        dat_sg: { body: "e", cut: true },
        ins_sg: { body: "oju", cut: true },
        loc_sg: { body: "e", cut: true },
        voc_sg: { body: "o", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "y", cut: true },
        acc_pl: { body: "y", cut: true },
        gen_pl: { body: " ", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: "y", cut: true },
      },
      {
        end_key: ["ov", "òv"], //тут может быть больше одного
        nom_sg: { body: " "  },
        acc_sg: { body: " " },
        gen_sg: { body: "ve", cut: true },
        dat_sg: { body: "vi", cut: true },
        ins_sg: { body: "vju", cut: true },
        loc_sg: { body: "vi", cut: true },
        voc_sg: { body: "ov", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "vi", cut: true },
        acc_pl: { body: "vi", cut: true },
        gen_pl: { body: "viji", cut: true },
        dat_pl: { body: "vam", cut: true },
        ins_pl: { body: "vami", cut: true },
        loc_pl: { body: "vah", cut: true },
        voc_pl: { body: "vi", cut: true },
      },

      {
        end_key: ["ti"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "tere", cut: true },
        dat_sg: { body: "teri", cut: true },
        ins_sg: { body: "terju", cut: true },
        loc_sg: { body: "teri", cut: true },
        voc_sg: { body: " " }, //добавить сut: true если надо

        nom_pl: { body: "teri", cut: true },
        acc_pl: { body: "teri", cut: true },
        gen_pl: { body: "terij", cut: true },
        dat_pl: { body: "teram", cut: true },
        ins_pl: { body: "terami", cut: true },
        loc_pl: { body: "terah", cut: true },
        voc_pl: { body: "teri", cut: true },
      },
      {
        end_key: ["ci"], //тут может быть больше одного
        nom_sg: { body: " ", cut: true },
        acc_sg: { body: " ", cut: true },
        gen_sg: { body: "cere", cut: true },
        dat_sg: { body: "ceri", cut: true },
        ins_sg: { body: "cerju", cut: true },
        loc_sg: { body: "ceri", cut: true },
        voc_sg: { body: " ", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "ceri", cut: true },
        acc_pl: { body: "ceri", cut: true },
        gen_pl: { body: "cerij", cut: true },
        dat_pl: { body: "ceram", cut: true },
        ins_pl: { body: "cerami", cut: true },
        loc_pl: { body: "cerah", cut: true },
        voc_pl: { body: "ceri", cut: true },
      },

      {
        end_key: ["ť", "ď", "j", "ć", "č", "j", "ź", "ž", "d", "v", "ś", "š"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "i" },
        dat_sg: { body: "i" },
        ins_sg: { body: "ju" },
        loc_sg: { body: "i" },
        voc_sg: { body: "e" }, //добавить сut: true если надо

        nom_pl: { body: "i" },
        acc_pl: { body: "i" },
        gen_pl: { body: "ij" },
        dat_pl: { body: "am" },
        ins_pl: { body: "ami" },
        loc_pl: { body: "ah" },
        voc_pl: { body: "i" },
      },

    

      {
        end_key: ["i"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "u", cut: true },
        gen_sg: { body: "e", cut: true },
        dat_sg: { body: " " },
        ins_sg: { body: "eju", cut: true },
        loc_sg: { body: " ", cut: true },
        voc_sg: { body: "o", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "e", cut: true },
        acc_pl: { body: "e", cut: true },
        gen_pl: { body: " ", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: "e", cut: true },
      },
    ],
  },

  {
    gender: "n.",
    sg: true,
    pl: true,
    ends: [
      {
        end_key: ["o"], //тут может быть больше одного
        nom_sg: { body: " ", cut: true },
        acc_sg: { body: " " },
        gen_sg: { body: "a", cut: true },
        dat_sg: { body: "u", cut: true },
        ins_sg: { body: "om", cut: true },
        loc_sg: { body: "u", cut: true },
        voc_sg: { body: " " }, //добавить сut: true если надо

        nom_pl: { body: "a", cut: true },
        acc_pl: { body: "a", cut: true },
        gen_pl: { body: " ", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: "a", cut: true },
      },
      

      {
        end_key: ["e", "ę"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "e", cut: true },
        gen_sg: { body: "a", cut: true },
        dat_sg: { body: "u", cut: true },
        ins_sg: { body: "em", cut: true },
        loc_sg: { body: "u", cut: true },
        voc_sg: { body: "e", cut: true }, //добавить сut: true если надо

        nom_pl: { body: "a", cut: true },
        acc_pl: { body: "a", cut: true },
        gen_pl: { body: "i", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: "a", cut: true },
      },

      {
        end_key: ["me"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "ne" },
        dat_sg: { body: "ni" },
        ins_sg: { body: "nem" },
        loc_sg: { body: "ni" },
        voc_sg: { body: " " }, //добавить сut: true если надо

        nom_pl: { body: "na" },
        acc_pl: { body: "na" },
        gen_pl: { body: "n" },
        dat_pl: { body: "nam" },
        ins_pl: { body: "nami" },
        loc_pl: { body: "nah" },
        voc_pl: { body: "na" },
      },

      {
        end_key: ["lę", "le", "se", "nę"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "te" },
        dat_sg: { body: "ti" },
        ins_sg: { body: "tem" },
        loc_sg: { body: "ti" },
        voc_sg: { body: " " }, //добавить сut: true если надо

        nom_pl: { body: "ta" },
        acc_pl: { body: "ta" },
        gen_pl: { body: "t" },
        dat_pl: { body: "tam" },
        ins_pl: { body: "tami" },
        loc_pl: { body: "tah" },
        voc_pl: { body: "ta" },
      },

      {
        end_key: ["nebo"], //тут может быть больше одного
        nom_sg: { body: "nebo" },
        acc_sg: { body: "nebo" },
        gen_sg: { body: "nebese" },
        dat_sg: { body: "nebesi" },
        ins_sg: { body: "nebesem" },
        loc_sg: { body: "nebesi" },
        voc_sg: { body: "nebo" }, //добавить сut: true если надо

        nom_pl: { body: "nebesa" },
        acc_pl: { body: "nebesa" },
        gen_pl: { body: "nebes" },
        dat_pl: { body: "nebesam" },
        ins_pl: { body: "nebesami" },
        loc_pl: { body: "nebesah" },
        voc_pl: { body: "nebesa" },
      },

      {
        end_key: ["oko"], //тут может быть больше одного
        nom_sg: { body: "oko" },
        acc_sg: { body: "oko" },
        gen_sg: { body: "oka" },
        dat_sg: { body: "oku" },
        ins_sg: { body: "okom" },
        loc_sg: { body: "oku" },
        voc_sg: { body: "oko" }, //добавить сut: true если надо

        nom_pl: { body: "oči" },
        acc_pl: { body: "oči" },
        gen_pl: { body: "očij" },
        dat_pl: { body: "očam" },
        ins_pl: { body: "očami" },
        loc_pl: { body: "očah" },
        voc_pl: { body: "oči" },
      },

      {
        end_key: ["uho"], //тут может быть больше одного
        nom_sg: { body: "uho" },
        acc_sg: { body: "uho" },
        gen_sg: { body: "uha" },
        dat_sg: { body: "uhu" },
        ins_sg: { body: "uhom" },
        loc_sg: { body: "uhu" },
        voc_sg: { body: "uho" }, //добавить сut: true если надо

        nom_pl: { body: "uši" },
        acc_pl: { body: "uši" },
        gen_pl: { body: "ušij" },
        dat_pl: { body: "ušam" },
        ins_pl: { body: "ušami" },
        loc_pl: { body: "ušah" },
        voc_pl: { body: "uši" },
      },

      {
        end_key: ["děte"], //тут может быть больше одного
        nom_sg: { body: "děte" },
        acc_sg: { body: "děte" },
        gen_sg: { body: "dětete" },
        dat_sg: { body: "děteti" },
        ins_sg: { body: "dětetem" },
        loc_sg: { body: "dětetei" },
        voc_sg: { body: "děte" }, //добавить сut: true если надо

        nom_pl: { body: "děti" },
        acc_pl: { body: "děti" },
        gen_pl: { body: "dětij" },
        dat_pl: { body: "dětam" },
        ins_pl: { body: "dětami" },
        loc_pl: { body: "dětah" },
        voc_pl: { body: "děti" },
      },
    ],
  },

  {
    gender: "m.sg.",
    sg: true,
    pl: false,
    ends: [
      {
        end_key: [
          "d",
          "t",
          "m",
          "n",
          "r",
          "l",
          "p",
          "b",
          "f",
          "v",
          "s",
          "z",
          "š",
          "ž",
          "č",
          "c"
        ],
        nom_sg: { body: " " },
        acc_sg: { body: "a" },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "e" }, //добавить сut: true если надо
      },

      {
        end_key: [
          "š",
          "ž",
          "č",
          "ć",
          "đ",
          "ń",
          "ľ",
          "ŕ",
          "ť",
          "ď",
          "ś",
          "ź",
          "j",
        ], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "a " },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "em" },
        loc_sg: { body: "u" },
        voc_sg: { body: "u" }, //добавить сut: true если надо
      },
      {
        end_key: ["y"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "ogo" , cut: true },
        gen_sg: { body: "ogo", cut: true },
        dat_sg: { body: "omy", cut: true },
        ins_sg: { body: "um" , cut: true},
        loc_sg: { body: "omy", cut: true },
        voc_sg: { body: " " }, //добавить сut: true если надо

      },

      {
        end_key: ["k"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "a " },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "če", cut: true }, //добавить сut: true если надо
      },

      {
        end_key: ["h"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "a " },
        get_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "še", cut: true }, //добавить сut: true если надо
      },

      {
        end_key: ["g"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "a " },
        gen_sg: { body: "a" },
        dat_sg: { body: "u" },
        ins_sg: { body: "om" },
        loc_sg: { body: "u" },
        voc_sg: { body: "že", cut: true }, //добавить сut: true если надо
      },

      {
        end_key: ["ec", "oc"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "ca ", cut: true },
        gen_sg: { body: "ca", cut: true },
        dat_sg: { body: "cu", cut: true },
        ins_sg: { body: "cem", cut: true },
        loc_sg: { body: "cu", cut: true },
        voc_sg: { body: "če", cut: true }, //добавить сut: true если надо
      },

      {
        end_key: ["el", "ol"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "la ", cut: true },
        gen_sg: { body: "la", cut: true },
        dat_sg: { body: "lu", cut: true },
        ins_sg: { body: "lom", cut: true },
        loc_sg: { body: "lu", cut: true },
        voc_sg: { body: "le", cut: true }, //добавить сut: true если надо
      },

      {
        end_key: ["ok", "ek"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "ka ", cut: true },
        gen_sg: { body: "ka", cut: true },
        dat_sg: { body: "ku", cut: true },
        ins_sg: { body: "kom", cut: true },
        loc_sg: { body: "ku", cut: true },
        voc_sg: { body: "če", cut: true }, //добавить сut: true если надо
      },
      {
        end_key: ["a"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "u", cut: true },
        gen_sg: { body: "y", cut: true },
        dat_sg: { body: "ě", cut: true },
        ins_sg: { body: "oju", cut: true },
        loc_sg: { body: "ě", cut: true },
        voc_sg: { body: "o", cut: true }, //добавить сut: true если надо
      },
    ],
  },

  {
    gender: "f.sg.",
    sg: true,
    pl: false,
    ends: [
      {
        end_key: ["a"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "u", cut: true },
        gen_sg: { body: "y", cut: true },
        dat_sg: { body: "e", cut: true },
        ins_sg: { body: "oju", cut: true },
        loc_sg: { body: "e", cut: true },
        voc_sg: { body: "o", cut: true }, //добавить сut: true если надо
      },
      {
        end_key: ["ov","òv"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "ve", cut: true },
        dat_sg: { body: "vi", cut: true },
        ins_sg: { body: "vju", cut: true },
        loc_sg: { body: "vi", cut: true },
        voc_sg: { body: "ov", cut: true }, //добавить сut: true если надо
      },

      {
        end_key: ["ti"], //тут может быть больше одного
        nom_sg: { body: " ", cut: true },
        acc_sg: { body: " ", cut: true },
        gen_sg: { body: "tere", cut: true },
        dat_sg: { body: "teri", cut: true },
        ins_sg: { body: "terju", cut: true },
        loc_sg: { body: "teri", cut: true },
        voc_sg: { body: " ", cut: true }, //добавить сut: true если надо
      },
      {
        end_key: ["ci"], //тут может быть больше одного
        nom_sg: { body: " ", cut: true },
        acc_sg: { body: " ", cut: true },
        gen_sg: { body: "cere", cut: true },
        dat_sg: { body: "ceri", cut: true },
        ins_sg: { body: "cerju", cut: true },
        loc_sg: { body: "ceri", cut: true },
        voc_sg: { body: " ", cut: true }, //добавить сut: true если надо
      },

      {
        end_key: ["ť", "ď", "j", "ć", "č", "j", "ź", "ž", "d", "ś", "š"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "i" },
        dat_sg: { body: "i" },
        ins_sg: { body: "ju" },
        loc_sg: { body: "i" },
        voc_sg: { body: "e" }, //добавить сut: true если надо
      },

      {
        end_key: ["òš"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "ši", cut: true },
        dat_sg: { body: "ši", cut: true },
        ins_sg: { body: "šju", cut: true },
        loc_sg: { body: "ši", cut: true },
        voc_sg: { body: " " }, //добавить сut: true если надо
      },

      {
        end_key: ["i"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: "u", cut: true },
        gen_sg: { body: "e", cut: true },
        dat_sg: { body: "i", cut: true },
        ins_sg: { body: "eju", cut: true },
        loc_sg: { body: "i", cut: true },
        voc_sg: { body: "o", cut: true }, //добавить сut: true если надо
      },
    ],
  },

  {
    gender: "n.sg.",
    sg: true,
    pl: false,
    ends: [
      {
        end_key: ["o"], //тут может быть больше одного
        nom_sg: { body: "" },
        acc_sg: { body: " " },
        gen_sg: { body: "a", cut: true },
        dat_sg: { body: "u", cut: true },
        ins_sg: { body: "om", cut: true },
        loc_sg: { body: "u", cut: true },
        voc_sg: { body: " ", cut: true }, //добавить сut: true если надо
      },

      {
        end_key: ["e", "ę"], //тут может быть больше одного
        nom_sg: { body: " " },
        acc_sg: { body: " " },
        gen_sg: { body: "a", cut: true },
        dat_sg: { body: "u", cut: true },
        ins_sg: { body: "em", cut: true },
        loc_sg: { body: "u", cut: true },
        voc_sg: { body: " " }, //добавить сut: true если надо
      },
    ],
  },

  {
    gender: "f.pl.",
    sg: false,
    pl: true,
    ends: [
      {
        end_key: ["y"], //тут может быть больше одного
        nom_pl: { body: " " },
        acc_pl: { body: " " },
        gen_pl: { body: " ", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: " " },
      },
      {
        end_key: ["e"], //тут может быть больше одного
        nom_pl: { body: " " },
        acc_pl: { body: " " },
        gen_pl: { body: " ", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: " " }, //добавить сut: true если надо
      },

      {
        end_key: ["i"], //тут может быть больше одного
        nom_pl: { body: "" },
        acc_pl: { body: "" },
        gen_pl: { body: "ij", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: "" },
      },
    ],
  },

  {
    gender: "m.pl.",
    sg: false,
    pl: true,
    ends: [
      {
        end_key: ["y"], //тут может быть больше одного
        nom_pl: { body: "" },
        acc_pl: { body: "" },
        gen_pl: { body: " ", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: " " },
      },
      {
        end_key: ["e"], //тут может быть больше одного
        nom_pl: { body: " " },
        acc_pl: { body: " " },
        gen_pl: { body: " ", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: " " }, //добавить сut: true если надо
      },

      {
        end_key: ["i"], //тут может быть больше одного
        nom_pl: { body: "" },
        acc_pl: { body: "" },
        gen_pl: { body: "ij", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: "" },
      },
    ],
  },
  {
    gender: "n.pl.",
    sg: false,
    pl: true,
    ends: [
      {
        end_key: ["a"],
        nom_pl: { body: "" },
        acc_pl: { body: " " },
        gen_pl: { body: " ", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: "" },
      },
      {
        end_key: ["e"], //тут может быть больше одного
        nom_pl: { body: " " },
        acc_pl: { body: "" },
        gen_pl: { body: " ", cut: true },
        dat_pl: { body: "am", cut: true },
        ins_pl: { body: "ami", cut: true },
        loc_pl: { body: "ah", cut: true },
        voc_pl: { body: " " }, //добавить сut: true если надо
      },
    ],
  },
  {
    gender: "indecl.",
    sg: true,
    pl: true,
   
  },
];

export default items;
