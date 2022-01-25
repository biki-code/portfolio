import "./scss/_global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages";
import { useDarkMode } from "./utils/useDarkMode";

const App: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode();

  document.body.className = `theme--${theme}`  // remove and use the solution below

  document.documentElement.setAttribute("data-color-theme", theme);

  return (
    <Router basename="/portfolio">
      <Homepage toggleTheme={toggleTheme} />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores dicta a, at obcaecati cumque ratione
      ducimus hic eligendi nihil quas in neque modi. Corrupti nulla nihil cum a eos! Tenetur praesentium ex rerum
      debitis, explicabo quo repellendus officia. Vel asperiores sequi similique voluptatem soluta modi laudantium
      atque? Cumque consequatur itaque consectetur eos quod, libero hic accusantium cum iste nam. Possimus incidunt
      placeat aliquam distinctio magni atque rerum accusamus, laboriosam soluta quis a cumque maxime, iusto corrupti
      laudantium harum aut, eius deserunt. Saepe laudantium aspernatur at suscipit dignissimos assumenda eveniet.
      Consequuntur, placeat enim expedita, animi ut accusantium reprehenderit assumenda molestias sit exercitationem
      error eum sequi omnis magnam maiores officiis, vero quasi! Atque obcaecati reprehenderit sint cum voluptatem
      aspernatur vero corporis? Magnam cupiditate praesentium fugit asperiores porro quibusdam placeat, esse libero iste
      beatae repellat reprehenderit adipisci quasi impedit perferendis similique nemo repellendus laudantium!
      Perferendis deserunt, itaque et tempore sint cumque ipsum? Excepturi deleniti laboriosam accusamus praesentium,
      quisquam quae, obcaecati repudiandae consectetur vero quis ad alias aspernatur. Eligendi at assumenda cupiditate
      sit veniam, nam alias iusto reiciendis illo qui soluta ad quas. Adipisci est dolor facere asperiores aliquam? Nemo
      est dolores unde laudantium blanditiis, modi rem, assumenda fuga quasi, asperiores natus eius eum. Perspiciatis
      adipisci at voluptas quasi cupiditate atque, ratione magni! Repellendus libero aut eveniet atque voluptatem. Sequi
      aut placeat enim perferendis, reiciendis omnis. Modi amet perspiciatis animi repellat rem quis provident qui porro
      ipsum. Officia qui sequi optio non suscipit? Dolorem nesciunt reprehenderit minus molestiae commodi ipsum,
      obcaecati dolore cumque beatae excepturi adipisci minima. Nesciunt soluta quis nemo odit inventore necessitatibus,
      explicabo illum repellendus, minima, unde doloremque deleniti reprehenderit provident. Dolores, velit! Eveniet
      aspernatur qui laborum repellat et eligendi dolorum in dicta accusantium neque tenetur consequuntur voluptatem
      aperiam temporibus recusandae, doloribus, magni nesciunt eos, sit nostrum quas. Officia, nam amet? Accusamus
      officiis sint, ad voluptatum odit a harum? Quos culpa voluptas modi molestias molestiae ex voluptatum esse tenetur
      omnis. Ab ipsa ullam hic laboriosam architecto officiis fugiat atque minus deserunt. Unde odit quod consequuntur
      tenetur debitis cum doloribus sed veniam. Fugit repellendus explicabo illo asperiores corporis sint necessitatibus
      dignissimos error nemo? Sunt sed necessitatibus pariatur iusto maxime sequi optio repellendus? Necessitatibus
      perferendis delectus neque! Odit iure soluta dicta, quibusdam impedit molestias. Doloribus repudiandae mollitia
      sequi officia impedit eligendi recusandae labore delectus aliquid atque voluptatum, nam vel exercitationem
      maiores. Odit, et! Nesciunt quaerat ad consectetur illo esse, accusamus velit quasi et magni sunt optio beatae
      quidem minima facere accusantium animi fugiat voluptas! Inventore ea officiis aperiam quam explicabo quidem alias
      exercitationem! Neque, placeat, inventore cumque blanditiis dolorum nam deserunt porro harum vero temporibus ipsa
      eligendi maxime cupiditate ad libero, mollitia et aspernatur id maiores debitis voluptate modi! Officiis ducimus
      autem dolor! Dolorum in cum esse facilis voluptatem reiciendis asperiores ab earum natus a consequuntur nihil
      numquam, quod soluta similique quo sed, rerum saepe est possimus mollitia nobis repellendus debitis culpa. Maxime?
      Dolores ex reprehenderit provident ipsa harum animi fugit quis nostrum, corporis tenetur nam possimus eligendi
      dolor culpa impedit vero vel debitis. Est nisi dolor perferendis maxime. Non et beatae veniam? Adipisci minus
      aperiam illum aliquam provident. Veritatis libero, enim nesciunt ratione sapiente aut atque totam perferendis
      numquam! Harum et vitae corporis nemo. Porro deleniti illo minima fuga! Minus, rerum expedita? Pariatur recusandae
      error voluptatum molestias illum porro nihil a ab odit illo architecto, minus in nulla eos facere suscipit, at
      ducimus dolorem natus dignissimos tenetur aliquam iusto. Quas, tenetur repellendus! Mollitia, modi blanditiis
      libero debitis ea odio alias id asperiores aspernatur ipsum ad totam ullam nihil magni. Molestias accusantium ut
      nihil quidem, est possimus aliquam, itaque quo quibusdam sed accusamus! Id eos at, eveniet nostrum animi dicta
      consequuntur hic aperiam voluptates itaque quae officia consequatur accusantium iste. Nostrum neque accusantium
      fugit similique soluta itaque quidem iusto animi qui, assumenda illum. Dolorem exercitationem voluptatum minus
      atque a laborum quasi? Possimus ratione ipsum nam culpa ipsa natus quidem reprehenderit nobis deserunt provident,
      impedit perferendis assumenda, ab, non et? Voluptatibus nam perspiciatis animi! Quisquam beatae molestias quas rem
      eligendi exercitationem tempora, officia tenetur nobis modi fugiat laboriosam illo! Consequuntur saepe officiis
      perspiciatis minus nostrum cupiditate totam nulla, ratione, voluptatem vero deleniti voluptatum facilis? Dolorem
      quisquam aut tenetur tempora vitae, ad nesciunt quo, sed eum labore amet culpa possimus magni incidunt optio nobis
      sit molestiae totam, fuga accusamus animi commodi accusantium? Eligendi, necessitatibus autem. Quisquam maiores
      molestias eos, ex esse accusamus aliquid consectetur minus hic soluta eius mollitia, officiis sunt blanditiis
      totam corrupti temporibus dicta. Exercitationem facilis obcaecati ab architecto magni eos porro incidunt.
      Laboriosam, adipisci sequi voluptate repellendus modi perspiciatis unde provident ad reprehenderit exercitationem
      maiores aliquam natus doloremque vero voluptatum cumque. Temporibus ipsa reprehenderit ipsam tempore iusto, velit
      officia nemo dolorem vel! Dolore pariatur reiciendis delectus assumenda repellendus dolor, eaque quidem minus
      veritatis ad, numquam soluta error hic sunt. Aliquam tempora officiis distinctio, ratione esse assumenda quisquam,
      suscipit rem nulla eius quasi. Repudiandae, repellat ullam, nesciunt consequuntur explicabo inventore quaerat
      corporis libero magnam commodi enim facilis. Non voluptatum perspiciatis vel quia, tempore sapiente ab, cum dolor
      unde delectus, nisi quod. Ducimus, maxime? Dolorem deserunt placeat, nihil expedita provident eos odit beatae quas
      in. Molestias facilis tempore reiciendis non blanditiis tenetur error iure, asperiores mollitia excepturi enim
      temporibus porro atque, eligendi iste laborum. Quas cupiditate nam sit quam ullam, adipisci ea ex tenetur tempore
      molestiae, cum ducimus amet nostrum labore veniam aliquam aut, optio omnis praesentium corrupti? Fuga suscipit
      officiis omnis modi libero? Veniam possimus est earum maxime atque ipsa facilis impedit magnam expedita soluta
      quae molestiae ad illum sed laudantium, corrupti ullam. Explicabo vel aspernatur ex, obcaecati doloremque
      laudantium delectus suscipit dolorem. Optio repudiandae natus tenetur? Aut voluptatem consequatur rerum earum
      deleniti alias ad at recusandae, magni laborum, voluptates odio vero dignissimos! Repellendus exercitationem
      debitis ab error facere doloremque officiis quibusdam maxime? Sed velit aperiam totam deleniti adipisci illo esse
      reiciendis, magni autem qui deserunt saepe numquam voluptatibus maxime quaerat earum omnis! Nihil eum aperiam
      ratione veniam totam quisquam voluptate est cumque? Saepe deleniti mollitia, illo libero nemo voluptate,
      accusantium dolor, perferendis distinctio ullam quia. Molestias nisi aliquid corporis. Architecto reiciendis est
      omnis aspernatur neque, necessitatibus vero odit nulla qui quibusdam totam. Praesentium a ea laboriosam eum
      suscipit accusantium quasi non quod voluptates? Tempora excepturi nisi explicabo dolore quasi possimus. Cum veniam
      pariatur quidem asperiores rerum, ea aut labore quis maxime optio. Maiores similique error eum reprehenderit
      blanditiis? Totam inventore provident nam impedit suscipit, qui perspiciatis id molestiae molestias aspernatur
      voluptas earum deserunt architecto mollitia! Facilis animi voluptatem amet blanditiis esse velit. Magni commodi,
      doloribus, est nulla impedit libero odit totam eum suscipit quibusdam animi quas provident quaerat perspiciatis
      ducimus! Eaque, perspiciatis eligendi. Nostrum, numquam maiores! Error fugit provident doloribus velit eveniet? Ex
      aliquam nisi commodi optio, distinctio voluptatibus magni quas aut perspiciatis, fugit facilis, harum dolorem
      corrupti reprehenderit unde quasi itaque cum nihil minus error. Quo obcaecati adipisci quisquam nemo sit? Magni,
      quasi voluptatibus, reiciendis suscipit tenetur esse excepturi saepe doloribus illo voluptates perferendis enim
      fugit aliquam vero neque. Laborum expedita adipisci tempora sed aperiam quo quidem, facere molestias delectus
      animi. Neque aliquid doloremque quaerat similique beatae quis libero est optio, velit reprehenderit non saepe
      exercitationem repellendus minima laborum sapiente debitis nemo adipisci, soluta reiciendis quas assumenda atque!
      Cum, maxime recusandae. Minima officiis facilis autem omnis aperiam velit facere beatae accusamus cupiditate
      consequatur. Inventore, ratione? Consectetur totam excepturi fugiat et nesciunt suscipit iure tenetur laboriosam
      tempora. Tenetur, repellat officia. Sapiente, nulla. Placeat architecto eius, nostrum quod dolores dolorem?
      Consequuntur deserunt praesentium totam. Dignissimos numquam quibusdam voluptate doloremque? Quae laboriosam
      aliquam voluptas inventore alias ipsa tempora a necessitatibus! Laboriosam doloremque quae culpa. A magnam amet
      aperiam ipsa cupiditate perferendis, voluptatibus, harum quo maxime magni dolor voluptate, obcaecati officiis.
      Assumenda eligendi et exercitationem consectetur, laudantium dicta deserunt aut corporis. Aspernatur
      exercitationem porro quasi. Nulla doloremque repellat magni, laudantium saepe perferendis. Et itaque earum unde
      natus nostrum aspernatur distinctio illo architecto exercitationem dolores ad quaerat adipisci, ratione dolore
      vel, sed necessitatibus fugit optio ducimus! Placeat ratione consectetur unde suscipit dolor iusto voluptatibus,
      quisquam perferendis quibusdam eum amet animi et expedita eos rem qui ipsam vitae odit quia, esse totam accusamus
      sunt! Officia, commodi sed? Repudiandae soluta iste atque obcaecati est rerum, cupiditate aperiam reprehenderit
      dolores numquam praesentium illo magni, quo quaerat possimus quibusdam pariatur iure nihil sequi, at non.
      Praesentium consectetur rerum veritatis porro. Doloribus ex dignissimos minus voluptas, laudantium modi nihil
      inventore nisi cupiditate nulla, obcaecati fugit laboriosam saepe? Distinctio rem molestias accusamus iste facere,
      architecto quam eum dolorum porro magni aliquam ut. Eos saepe doloremque libero quo totam odio tempore cupiditate
      dolores officiis necessitatibus numquam molestias vero aspernatur facilis facere praesentium nemo sunt, quibusdam
      consectetur, animi magnam. Libero, repellendus assumenda. Doloribus, optio. Dolorum tempora maxime hic perferendis
      iste eaque quaerat laborum, eveniet eius quidem officia, ut dolor in totam expedita repellendus blanditiis!
      Deleniti cupiditate, excepturi modi mollitia sint error. Eum, aliquid unde. Dicta quae voluptas earum sunt
      inventore! Reprehenderit ea beatae sint corporis cupiditate dicta, doloremque odit esse nesciunt ullam aspernatur
      eos? Consectetur, id aperiam quasi at quibusdam odio? Mollitia, a. Unde.
    </Router>
  );
};

export default App;
