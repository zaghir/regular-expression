/**
 * to match =  identifier  , correspondre
 */
/**
 * Les meta characters dans les Regular expressions sont 
 * \.*+-{}[]^$|?():!=
 
 * \ backslah
 * * door
 * . dot  => wildcard c'est jocker
 * + plus 
 * - minus
 * {} Curly Brackets ==> right Curly Brackets , left Curly Brackets
 * []
 * ^ caret  ou Circumflex Accent
 * $ dollar sign 
 * | pipe
 * ? questionmark
 * () Parenthesis  ==> left Parenthesis , right Parenthesis
 * : Colon
 * ! exclamation
 * = equal
 * tester avec regular expression  
 */

let value = '1.251.261.25'.match(/1.25/g);
console.log(`tester  ==> '1.251.261.25'.match(/1.25/)  resultat`, '1.251.261.25'.match(/1.25/));

/**
 * tester avec un wildcard
 * le processor recuper 2 resulats ["yoou", "y3ou"] , l'expression dit au processor de trouver les characters  y + . => un et un seul char joker + ou 
 * si on ajoute un autre point on exige d'avoir 2 char + les chars ou  ==  le resulat de la recherche sera ==> ["y53ou"]
 */
value = 'you , tyouss , ryoouss , y3ouss, y53ouss';
value.match(/y.ou/g);

// avec l'option /g => global ,le processor execute le test sur toute la chaine et renvoie plusieurs resultat qui trouve non pas le premier resultat trouvé
console.log(`tester  ==> '1.251.261.25'.match(/1.25/g)  resultat`, '1.251.261.25'.match(/1.25/g));


/**
 * pour echaper les metacharacters  on utilise \ le backslash
 * pour que le processor puisse traiter l'expression reguliere comme un character et on comme un metacharacter , exemple . =>le poind on utilise \.  , exp2 pour \ ==> \\ 
 */
value = '1.98 1a98 1298';
value.match(/1.98/g);  // le resulat c'est ["1.98", "1a98", "1298"] , car le processor interprete . commme un metacharter
value.match(/1\.98/g);  // le resulat c'est ["1.98"] car on a dit au processor d utiliser le . seulement comme un character

/**
 * avec le characte square braces []  on test pour trouver tous le characters qui se trouve dans les croché
 * l ordre des characters dans les square braces est sans importance
 */
console.log(`'abcdefghigac'.match(/[ac]/g)` , 'abcdefghigac'.match(/[ac]/g));
value= 'day and dry';
value.match(/d[ar]y/g) ; // le resulat c'est  ["day", "dry"]  on dit au processor de trouver le char d + 1 char soit a ou r [ar] + le char y
value = 'honor honour' ;
value.match(/hon[ou]r/g); // le resulat c'est ["honor"] on a jouter un autre character de plus dans honour (u) et [] traite un seul character


/**
 * pour chercher une liste de lowercase alphabets dans une string on utilise l'expression console.log('abcd'.match(/[abcdefghijklmopqrstuvwxyz]/g));
 * [a-z] mais c'est possible d'utilise l'expression [a-z] chercher les alphabets de a à z miniscule 
 * la position est importante pour matcher tous les characters on commence de la lettre a et on fini par z
 * [A-Za-z] on veut chercher aussi les lettre majiscule de A -> Z et de a -> z, il ne faut pas mettre des escapes entre les expressions  
 * [A-Za-z0-9] on veut chercher les characters alpha numerique ==> Majiscule miniscule et numerique 
 */
console.log('abcdWaa'.match(/[A-Za-z]/g));

// [40-89] cette regle ne correspond pas à tous les chiffre entre 40 au 89
// [40-89] equivante à [0-9] 
// [40-89] ==> 4 chercher le charactere 4 
//		   ==> 0-8 chercher les characteres etre 0 à 8 
//		   ==> 9 chercher le charactere 9 
//		   ==> 0-8 inclue le character 4 + la recherche du charactere 9 ce qui donne une expression [0-9]
console.log('abcdWaa9'.match(/[A-Za-z0-9]/g));

/**
 * ^ caret defini un jeux de caractères négatifs correspondent à un ou plusieurs caractères non définis dans le jeu de caractères à tester.
 * ^ negative character sets quand il est le premier character dans l'expresion régulière veut dire ne cherecher pas le characters si le critere de recherche est respecte ou validé
 * [^0-9] ne retourner les characters numerique 
 * /bea[^tr]/g  avec cette expression le mot bean va matcher mais bear ou beat non car avec [^tr] on a exclue le char t et r
 */

/**
 * le resultat de l'exemple est ["bean", "bea "]
 * on a recuperé un seul resulat de bea mais on a 2 valeur de bea
 * le precessor quand il execute la requete il cherche une chaine avec 4 char au minimume car bea = 3 char ,plus [^tr] =1
 * la premiere bea = 4 char ==> bea = 3 char plus un espace vide qui est difference de t et r
 */
value = 'bean beat bear bea  bea';
value.match(/bea[^tr]/g);

/**
 * metacharacter inside chacters set 
 * les metacharacters  n ont pas besoin d'etre echapé dans le characters set []
 * exp : /b[iao.xyz]/ on a pas besoin d'echapé le . car il a un comportement d un character mais pas un jocker (wildcard)
 *        bit   bat  bot  b.t
 * les metacharacter qu'il faut ecchaper dans le character sets sont : [ - ^ \ / 
 * [ Opening bracket n a pas besoin d'etre echapé 
 * ] Closing bracket a besoin d'etre echapé si non il réagit comme la fin de l'expression 
 * exp : /code[[(][0-9][\])]/
 *     value = code(2) code[4) code[6] 
 *     code ==> chercher les chaines de character qui commence avec code
 *     [[(] ==> chercher le char [ ou (
 *     [0-9] ==> chercher les nombre
 *     [\])] ==> chercher ] ou )  ici on a echapé ] 
 * 
 * exp : /2018[-\/]10[-\/]26/
 *     value = 2018-10-26  2018/10/26
 *     2018 ==> chercher les chaines de character qui commence avec 2018
 *     [-\/] ==> chercher le char - ou /  ici on a echapé / 
 *     10 ==> cherché 10
 * 
 * exp : /any[1\-\\_]/
 *     value = any1 any- any_ any\
 *     any ==> chercher les chaines de character qui commence avec any  
 *     [1\-\\_] ==> chercher 1 ou - ou \ ou _ on a echapé le char -, \
 */
value = 'bit   bat  bot  b.t bst';
value.match(/b[iao.xyz]t/g); // resulat ["bit", "bat", "bot", "b.t"]  on ne trouve pas bst car le poind n'est pas un wildcard

value = '2018-10-26  2018/10/26';
value.match(/2018[-\/]10[-\/]26/g); // resulat ["2018-10-26", "2018/10/26"]

value = 'any1 any0 any- any_ any\ ';
value.match(/any[1\-\\_]/g); // resulat ["any1", "any-", "any_"]

/**
 * Shorthand character sets ==> Sténographi
 * Shorthand character sets sont des jeux de caractères prédéfinis
 *   
 *   Shorthand      Meaning                 Equivalent 
 * -----------------------------------------------
 * |  \d        |  Digit                 |   [0-9]
 * |  \w        |  Word character        |   [A-Za-z0-9_]
 * |  \s        |  Whitespace            |   [\t\r\n]
 * |  \D        |  Not a Digit           |   [^0-9]
 * |  \w        |  Not a Word character  |   [^A-Za-z0-9_]
 * |  \s        |  Not a Whitespace      |   [^\t\r\n]
 * 
 * exp 
 * /\d\d\d\d/   matches 2018 ,4 digit ==> but not word (abcdd)
 * /\w\w\w/    matches 3 character ==> AbC , yzr , 1cq
 * /\s/         matches  spaces but also tabs and line returns
 * c'est possible d'utiliser les Shorthand character sets character set 
 * /\w\-\\/     matches word character or hyphen our backslash
 * /\w\s/       matches any word character or whitespace character
 * /[^\d]       we could also use negations with them
 * 
 * cautions ==== attention
 * /[^\d\s]/  is not the same as /[\D\S]/
 * /[^\d\s]/  means neither a digit nor a space character  ni un digit ni un space character
 * /[\D\S]/   means either not a digit or not a space character
 *            it will match numbers ans spaces also
 */ 
 value = '2018 Morati';
 value.match(/\d\d\d\d/g); // resulat ["2018"]

 value = 'AbC , yzr , 1cq 1112223334445555';
 value.match(/\w\w\w/g); // resulat ["AbC", "yzr", "1cq", "111", "222", "333", "444", "555"]

 value = 'AbC , yzr , p_10 , 1-q';
 // la taille de value est 22 character avec les espaces le resulat de la recherche est 13 character sans les espaces
 // le resultat est ["A", "b", "C", ",", "y", "z", "r", ",", "p", "_", ",", "-", "q"]
 value.match(/[^\d\s]/g); 
 // nombre de resultat trouvé est 22 [\D\S] utilise la comparaison avec un OU logique si le processor trouve espace il l'accepte car il n'est pas numerique ou il n'est pas un espace
 // le resulat ["A", "b", "C", " ", ",", " ", "y", "z", "r", " ", ",", " ", "p", "_", "1", "0", " ", ",", " ", "1", "-", "q"]
 value.match(/[\D\S]/g);


 /**
  * Repetition Expressions
  * 
  *     Metacharacter    Meaning
  * --------------------------------------
  *        *           | Matches preceding item zero or more times [0 , n ]
  *        +           | Matches preceding item one or more times  [1 , n ]
  *        ?           | Matches preceding item zero or one time  [0 , 1 ]
  * 
  * in case of * preceding item could repeat 0 or more times
  * in case of + preceding item could repeat 1 or more times
  * in case of ? preceding item could repeat 0 or 1 time
  * * and ? makes item preceding items optional
  * + repetition makes that item obligatory
  */
 //  /bananas*/   matches banana , bananas , and bananasss
 //  /bananas+/   matches bananas , and bananasss
 //  /bananas?/   matches banana , and bananas but not bananasss  il matche 0 ou une 1 fois pas plus  

 //  /\w\w\w\w*/  matches words with three letters or more
 //  /\w\w\w\w+/  matches words with three letters or more
 //  Both of these cases produce the same result
 //  you could make a letter optional by using ? metacharacter 
 //    exp : /hononu?r/ match honour , honor  , la chaine hononu est facultatif ? => [0,1] soit elle exite ou non 
value = 'code codes  codesssss';
value.match(/codes*/g); // resulat ["code", "codes", "codesssss"]    * => [0,n]
value.match(/codes+/g); // resulat ["codes", "codesssss"]    + => [1,n]  code ne matche pas avec codes 
value.match(/codes?/g); // resulat ["code", "codes", "codes"]   

value = 'code codes  codesssss two';
value.match(/\w\w\w\w*/g); // resultat ["code", "codes", "codesssss", "two"]  il accepte meme two qui a une taille de 3 char du * [0, n]
value.match(/\w\w\w\w+/g); // resultat ["code", "codes", "codesssss",] two n'est pas accepté + [1 , n]

value = 'honor honour hono1r'; 
value.match(/honou?r/g); // resultat ["honor", "honour"] , le processor cherche hono puis test l'existance du char u il est optionnal ? => [0,1] soit il n'existe pas comme dans honor soit il existe honour  puis cherche le char r

/**
 * Quantified Repetition
 * if we need precision other than 0 or 1 we need to need to use quantified repetition
 * 
 *     Metacharacter        Meaning
 * ---------------------------------------------------------------------------
 *       {              |  Start Quantified Repetition of Preceding item
 *       }              |  End Quantified Repetition of Preceding item 
 * 
 * Their syntax in {min , max }. min and max are positive integers  , ca permet de compter le nombre de fois que le char doit etre figurer dans la chaine
 * Min is required. It could be 0. Max is optional
 * 
 * /\w{2,7}/  matches words with 2 to 7 letters 
 * /\w{2}/    matches words with exactly two letters (min is max)
 * /\w{2,}/   matches words with 2 or more letters (max infinite)
 * /\w{0,1}/  is the same \w?
 * /\w{1,}/   is the same \w+
 * /Z{1,2}/   matches Z and ZZ but not ZZZ
 */
value = 'y Mohamed Ali Brahim Abdelhak';
value.match(/\w{2,7}/g); // resultat ["Mohamed", "Ali", "Brahim", "Abdelha"]  on veut recuperer les chaines de character avec une taille min = 2 et max = 7
value.match(/\w{2,}/g); // resultat ["Mohamed", "Ali", "Brahim", "Abdelhak"] {2,} => signifie [2, n] character
value.match(/\w{2}/g); // resultat ["Mohamed", "Ali", "Brahim", "Abdelhak"] {2} => signifie [2, 2] character
value.match(/\w{1,2}/g); // resultat ["Mohamed", "Ali", "Brahim", "Abdelhak"] {2} => signifie [1, 2] character 
/**
 * Regex engine regex doit faire un choix sur ce qu'il doit retourner lors de l'utilisation de repetition expressions
 * String 01_ABC_07_report_11_work against   /\d+\w+\d+/
 * String call , need , medal against /.+,.+/ 
 * Les expressions de répétition standard sont gourmandes. Elles essaient de faire correspondre la chaîne la plus longue possible, mais elles tentent toujours de faire une correspondance réussie.
 */
value = '01_ABC_07_report_11_work';
// \d+  ==> match avec 01                 c'est des digit [1 , n]
// \w+  ==> match avec ABC_07_report_1    c'est des char  [1 , n]
// \d+  ==> match avec 1                  c'est des digit [1 , n]
value.match(/\d+\w+\d+/g); // resultat  ["01_ABC_07_report_11"]
value = 'call , need , medal' ;
// .+,  ==> call, need 
// .+   ==> medal
value.match(/.+,.+/g); // resultat  ["call , need , medal"]

/**
 * Regex engines choose greediness by default 
 * We could alter this behaviour by using ? metacharacter
 *   Metacharacter                 Meaning
 * -----------------------------------------------------
 *         ?         | Mackes preceding quatifier lazy
 * -----------------------------------------------------
 * Example Syntax
 * *?            is called lazy star
 * *+            is called lazy plus
 * {min,max}?
 * ??
 * 
 * The greedy strategy matches as much a possible before giving control over to the next expression part
 * the lazy strategy matches as less as possible before giving control over the next expresion part
 * le but de lazy strategy c'est de trouver une corresponce minimale et donnée la maine ou le control a la prochaine condition dans l'expresion regulaire 
 * ce n'est pas comme la strategy greedy ou gourmande qui fait le matching complé avant de données la maine à la prochain condition
 * 
 * /codes??/ matches code but not codes 
 * /codes??a/ matches codes because regex engines are eager to return a result ,regex engines est pressé d'envoya le resulat plus ?? dit au regex engines c'est le minimum pour tester
 * /\w*?\d{3} matches 123 and abcdef246
 */ 
value = 'code codes';
value.match(/codes??/g); // resultat ["code", "code"]  on ne trouve pas codes parce que on dit au moteur fait un matching avec le minimum de caracteres trouve par ?? ici c'est codes s'il ne trouve pas le s c'est pas grave 
value = 'codea codesa';
value.match(/codes??a/g); // resultat ["codea", "codesa"]  ==>  "codea" c'est au mode lazy plus la condition de trouver a , "codesa" par ce que le moteur est eager pour presser il fait le premier matching et test la deusieme condtion de trouver a

/**
 * Grouping Metacharacters
 * Grouping metacharacters are the opening and closing parenthesis
 *   Metacharacter                 Meaning
 * -----------------------------------------------------
 *         (           | Start of a grouped expression
 *         )           | End of a grouped  expression
 * 
 * Reasons to use Grouping Metacharacters
 *   Group portions of the expression
 *   Apply repetions operator to a group 
 *   Makes expressions more readable
 *   it capture group for matching and replacing 
 * Grouping metacharacter can't be used inside character classes otherwise they gets their litteral meaning
 * 
 * /(xyz)+/  match xyz and xyzxyzxyz. this regex does not match xyzx , il faut avoir un matching complet de xyz de [1,n] fois
 * /(im)?possible/ matches possible and impossible. In this exemple im si optional avec la condition ?
 * You could also use regular expressions easier to read. /(run()?/ is the same as /runs?/
 */

 value = 'xyzxyzxyzabcd';
 value.match(/(xyz)+/g) ; // resultat ["xyzxyzxyz"]
 value = 'possible topossible impossible';
 value.match(/(im)?possible/g); // resultat ["possible", "impossible", "possible"]

/**
 * Alternation Metacharcter
 *   Metacharacter                 Meaning
 * -----------------------------------------------------
 *         |           |  Match previous or next expression
 * 
 * Pipe character is an OR operator
 * It works like an OR operator || in most programming languages
 * It works in the orderthat leftmost expression gets precedence
 * You could chain them with use of more than one alternative metacharacter
 * 
 * /laptop|desktop/  matches laptop desktop
 * /call|battle|medal|need/ matches call,battle,medal,need
 * /hack(ing|eg)/  and /hacking|ed/ ad diffrent. First on matches hacking and hacked whille the second one matches hacking and end 
 * /b(ei|ea)rd/  matches beird and beard
*/

value = 'laptop desktop server';
value.match(/laptop|desktop/g); // resultat ["laptop", "desktop"]  l expression fait une comparaison avec un ou logique |

value = 'call battle medal need jasmine' ;
value.match(/call|battle|medal|need/g); // resultat ["call", "battle", "medal", "need"]

value = 'working worked';
value.match(/work(ing|ed)/g); // resultat ["working", "worked"]

value = 'beird beard';
value.match(/b(ei|ea)rd/g);  //resultat ["beird", "beard"]

/**
 * Repeating and nesting alternations
 * First matched alternation does not affect the next matches
 * Basically it is the character class that matters
 * /(XX|YY|ZZ)/ matches XXZZXXYY. It is the character class that needs to match 
 * (call(battle|need)|impossible(mission)?|web(development|design|mock-up))
 * cette regex matches avec
 *    impossible
 *    call need 
 *    web development
 *    call battle
 *    impossiblemission
 *    wording            ne va matcher
 *    web design
 *    web mockup 
 */
value = 'XXYYZZXX XXXXXXXX';  // on compte le nombre d'iteration pour chaque condition vrai , 
value.match(/(XX|YY|ZZ){4}/g); // resultat ["XXYYZZXX", "XXXXXXXX"]     nombre de condtion c'est 4 et les conction de de trouver XX ou YY ou ZZ

value = 'impossible call need call battle impossiblemission wording  web design web mock-up' ; 
value.match(/(call (battle|need)|impossible(mission)?|web (development|design|mock-up))/g);


/**
 * Start and end anchors
 *   Metacharacter                 Meaning
 * -----------------------------------------------------
 *         ^           |  Start Quantified Repetition of Preceding item
 *         $           |  End Quantified Repetition of Preceding item
 *         \A          |  Start of string, but never the end of line 
 *         \Z          |  End of string, but never the end of line 4
 * ^ and \A and $ and \Z have almost the same meaning the only diffrence is how they handle difference between a string and a line
 * ^ means the start of a string when it is at the start of regex
 * $ means the end of a string when it is at the end of regex
 * 
 * Anchors reference a postion not actual character
 * /^call/  or /\Acall/ matches call if it is the start of string.
 * /call$/  or /call\Z/ matches call if ti is the end of string
 * /^call$/ or /\Acall\Z/  matches call if string is call 
 * ^ and $ are supported in all regex engines
 * \A and \Z are supported in Java Perl PHP Phyton Ruby .
 *   They are not supported ins Javascprit. 
 */

 value = 'work work' ;
 value.match(/^work/g); // resultat ["work"]  c'est le premier work qui est recuperé
 value.match(/work$/g); // resultat ["work"]  c'est le denier work qui est recuperé
 value.match(/work/g);   // resultat ["work", "work"]  recupere tous les chaine work
 value.match(/^work$/g);   // resultat null car il faut que wock soit la permiere et la deniere chaine de caractere alors que on a 2 work
 value = 'work' ;
 value.match(/^work$/g);   // resultat ["work"]  work et la seule chaine elle est la premiere et la derniere chaine de caractere

 /**
  * Caret(^) and \a and Dollar($) and \Z are not the same 
  * They handle new lines differently 
  * /[a-z]+/ march against           /^[a-z]+/ match against        /[a-z]+?/ match against
  * call                             call   ---> match              call
  * battle                           battle                         battle
  * need     ---> match              need                           need
  * far                              far                            far
  * world                            world                          world
  * better                           better                         better  ---> match
  * 
  * There is an invisible character at the end of the line.
  * It could be \r or \n or the both \r\n
  * When start and end anchors do not match newline character regex engine is said to be in single line mode  
  * ^ and $ do not match at line breaks
  * \A and \Z also do not match at line breaks
  * In multiline mode ^ and $ match at the start and end line 
  * \A and \Z do not match at line breacks even in mulitine mode
  * To use multiline mode add m at the end of regex
  * 
  *  language                 Usage
 * -----------------------------------------------------
 *      Java           |  Pattern.comile("^regex$", Pattern.MULTILINE)
 *      Javascript     |  /^regex$/m
 *      PHP            |  preg_match(/^regex$/m,"text")
 *      Python         |  re.search("^regex$","text",re.MULTILINE)
  */

value = 'call\n battle\n need\n far\n better\n';
value.match(/[a-z]+$/gm) ;  // resultat ["call", "battle", "need", "far", "better"]   le \n c'est pour injecter un retour a la ligne et m pour le multiline

value.match(/^[a-z]+$/gm) ; // ca aussi fonction car la condition dit de commencer et finir sur la meme lingne pas commencer et finir dans une string

/**
 * Word boundaries  limites des mots
 *   Metacharacter                 Meaning
 * -----------------------------------------------------
 *      \b            |  Word Boundary(start/end of a word)
 *      \B            |  Not a word Boundary
 * 
 * They reference a position not a word character
 * before the first word charcacter in the string it s a boundary
 * After the last word character in the string it s a boundary
 * When we shifts from word character to non word character there is a word boundary. Word characters are [A-Za-z-0-9]  
 * 
 * /b\w+\b/ matches leanring is my passion  , character is preceded by a word boundary and also followed by a word boundary
 * /\b\w+\b/ also matches author_012
 * /\b\w+\b/ matches fifty-fifty        fifty et fifty  word broundaries mais pas -
 * 
 * /\Blearing/ does not match learing is my passion 
 * /\Bw+\b/  matchs learing is my passion   =>  l earin g is my p assio n
 * 
 * A space is not a word character
 * All character other than [A-Za-z0-9_]/  makes a word boundary
 * Word boundary is not an actual character They are zero-length and hust reference a position
 * String learning and passion do not match 
 *     /learning\band\bpassion/
 * but matches
 *     /learning\b and\b passion/
 */



 /**
  * Backreferences  references arriere
  * Regex engine capture the grouped expressions ans stros the matched portion in the parentecies
  * /l(earnin)g/  matches learning and stores earnin.  remember it for later use it in any stores , the data was matched not the expression regex engine
  * We use backreferences to assist the captured data
  * We refer to backreferencess with backslah followed by nember. Tes first backreference is \1 second is \2 
  * Backreferences can be used in the same expression as the group
  * Backreferences can be accessed after the match is completet
  * Backreferences can not be used inside character class
  * Most regex engines support backreferences from \1 to \9    elles sont utilisées dans les editeur par exemple pour detecter les balises ouvrante et fermantes
  * Most regex engines support backreferences from \10 to \99
  * Some regex engines use $1 through $9 instead o \1 to \9    instead == au lieu ou plutot
  * 
  * /(call) for \1/  matches call for call
  * /(work)(hard)(success)\2\1\3/  matches   workhardsuccesshardworksuccess
  *  /<(b|p)>.+<\/\1>/  marches
  * <p>This is my car</p>and<b>This is red color</b>
  * but do not match
  * <p>This is my car</b>and<b>This is red color</p>
  *  
 */

 value ='call for call' ;
 value.match(/(call) for \1/g); // resultat ["call for call"]  le moteur a fait la corresponcance et il a bien trouvé le 2eme call

 value = 'workhardsuccesshardworksuccess'; 
 value.match(/(work)(hard)(success)\2\1\3/g); // ["workhardsuccesshardworksuccess"] pour que la correspondance soit correcte il  work et hard et success et hard puis work puis success 
 
 value = '<p>This is my car</p>and<b>This is red color</b> <p>This is my car</b>and<b>This is red color</p>' ; 
 value.match(/<(b|p)>.+<\/\1>/g);  // resultat ["<p>This is my car</p>and<b>This is red color</b> <p>This is my car</b>and<b>This is red color</p>"]
 
/**
 * Backreferences to optional expressions
 * /X?Y/ matches XY and Y
 * /(X?Y)/ matches XY and captures X.
 * it it matches Y it captures empty string "".It is acceptable because we make it  optional
 * When regex engine captures zero-width. backreferences became zero-width too 
 * /(X?)Y\1/ matches XYX and Y
 * /(X?)Y\1Z/ matches XYXZ and YZ 
 * 
 * /(X)?Y/ matches XY and Y
 *    In the first case /(X)?Y/  matches XY and captures X
 *    In the second case /(X)?Y/ matches Y and captures nothing. X was not optional. The whole group was optional. So /(X)?Y\1/ matches XYX but not Y il is  not true in javasript and actionscript 
 * 
 * In the first case Element is optional. Group/Capture i snot otional
 * /(X?)Y/ matches Y and captures ""
 * 
 * In the second case Element is not optional. Group/Capture is optional
 * /(X)?B/  matches B and captures nothing
 * 
 */
value ="XYX Y"
value.match(/(X)?Y\1/g); // resultat ["XYX", "Y",]
value.match(/(X?)Y\1/g);


/**
 * Non-capturing Group Expressions 
 *   Metacharacter                 Meaning
 * -----------------------------------------------------
 *        ?:           | Specify a non-capturing group
 * c'est si on veut echaper à la correspendance avec une chaine de characters
 * ?:  specifies a non-capturing group
 * /([A-Za-z]+)/  becomes /(?:[A-Za-z]+)/
 * You can optimize regex for speed
 * Preserve space for more capture     pour ne pas prendre beaucoup de memoire pas le regex
 * Most regex engines support non-capturing groups except Unix tools 
 *  
 */
 value = 'test test' ;
 value.match(/([a-z]+) \1/g);  // resultat ["test test"]
 value.match(/(?:[a-z]+) \1/g); // resultat a null parce que on veut pas recuperer cette chaines de charactere


 /**
  * Lookaround Assertions   ==> Assertions de contournement
  */