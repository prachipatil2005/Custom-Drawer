import { useState } from "react";
import { Button } from "@chakra-ui/react";
import CustomModal from "./components/CustomModalSS";

export default function ApprovalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div style={{ padding: "20px" }}>
      <Button onClick={handleOpen} colorScheme="teal">
        Open Custom Modal
      </Button>

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleClose}
        header="My Modal Header"
        footer="My Modal Footer"
        width="50vw"
        isCentered={true}
        scrollBehavior="inside"
        animationDuration="0.6s"
        overlayBlur="4px"
        backgroundColor="white"
        padding="6"
        footerAlign="center"
        isResizable={true}
        body={<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis est dicta recusandae exercitationem, veniam possimus fugit temporibus quisquam maiores quibusdam architecto porro in dolore a, numquam non sequi commodi facere.
        Cupiditate sequi accusamus, ut beatae eius fugit voluptate ducimus libero eaque laudantium delectus recusandae dolorem labore exercitationem debitis porro inventore, maiores optio sapiente similique ipsam tempore nihil aspernatur repellendus. Ipsa!
        Dicta, eos reiciendis perspiciatis ipsam eligendi commodi, voluptate sunt iure, tempore placeat consectetur illum! Vel vitae necessitatibus quas blanditiis voluptatum laboriosam. Veniam distinctio dolore esse, facere iusto reprehenderit quasi ex!
        Quisquam voluptates similique aliquam alias vitae molestias porro libero quibusdam sint consectetur qui dignissimos nisi, eaque voluptatibus nam ut ratione. Necessitatibus nam earum quas hic officia? Maxime cumque ullam impedit?
        Sit libero quis expedita cumque reprehenderit cum labore doloremque ullam similique aliquam, accusantium commodi a debitis ex consequatur dignissimos cupiditate rerum placeat? Possimus, praesentium exercitationem quidem quo omnis dolores inventore.
        Maxime incidunt dolor sit vero. Ab iure molestiae distinctio laudantium libero corrupti, neque tempore at porro, repudiandae reprehenderit. Nesciunt fuga, iusto eligendi vitae nihil similique ducimus amet porro natus voluptas?
        Dolores esse voluptates, est quos, modi vel nostrum maiores repellat, in asperiores delectus et obcaecati. Fugit non id dolorem quis exercitationem eligendi molestiae distinctio, aspernatur illum, in rerum officiis facilis.
        Voluptates, cumque corporis. Necessitatibus, consequuntur aliquid labore cupiditate id cumque tempora, sed nam expedita soluta, molestiae praesentium! Deserunt magnam excepturi placeat qui non, accusamus corrupti nulla harum quos molestias maiores.
        Rem ea tempore consectetur placeat, alias a facilis! Earum quidem alias vel provident quaerat est, nemo perferendis ullam voluptates? Rerum aspernatur sit animi nostrum praesentium dolores quis obcaecati laboriosam perspiciatis.
        Molestias reprehenderit eligendi commodi pariatur porro sint, vitae laborum modi harum cumque temporibus, dicta similique nesciunt, ab quo earum! Ipsa sunt doloribus officiis corrupti excepturi hic soluta. Magni, saepe maxime!
        Culpa magnam illum, at ratione nobis atque sed quibusdam pariatur dolor, laborum excepturi quia recusandae officiis repellat quo, molestiae provident saepe. Sed, ipsam recusandae vel commodi obcaecati magni dolorem tempora?
        Adipisci cum at quod, tempore vel consequatur? Nisi molestiae similique corrupti impedit ab eveniet consequuntur, consectetur sunt voluptatem? Dolor, voluptatem! Vero minima quasi aliquam eum natus facilis inventore minus similique.
        Ipsam voluptatem sequi rerum, reprehenderit, numquam fuga mollitia eos eum dolorum alias quibusdam dicta dolorem, tempora ex assumenda? Placeat, rerum odio exercitationem nostrum eius id illum doloremque. Explicabo, voluptates aperiam.
        Tempore corporis ex nobis voluptates modi molestiae voluptas. Temporibus deleniti ex excepturi illum ipsa, perspiciatis veritatis doloribus expedita repellat quibusdam asperiores aliquid ut dolore blanditiis iste cum, numquam, tempora suscipit?
        Itaque saepe cumque perferendis consequuntur minus cum libero quis debitis odio aliquid quam veritatis, voluptas dolorum qui mollitia minima officiis doloremque quidem aliquam. Quia nisi ullam fuga ipsam iste consequatur.
        Distinctio minima natus ea blanditiis, doloribus ex dolor voluptas eveniet maiores est deleniti explicabo quo suscipit, modi aperiam at! Ipsa velit debitis praesentium voluptatibus fugit explicabo ab rem iure expedita.
        Neque, doloribus quae dolores, eos ex consectetur ea deserunt numquam possimus obcaecati ducimus tempore ipsa esse nostrum! Ad eum earum odio eius aliquid, eaque adipisci nisi illo ab quasi vitae.
        Quasi, veniam. Est, aspernatur! Rem excepturi odit vero id neque necessitatibus laboriosam error cupiditate ipsam perspiciatis, molestiae consectetur repellat dolorum sit? Tempore voluptatibus atque iste a delectus magni officia minima!
        Possimus fugit aliquid sed officiis quod quidem non libero, voluptatem culpa odio. Aliquam iste porro incidunt eaque totam, quisquam vitae iure. Voluptate numquam odit sed cumque eveniet eaque quas vitae.
        Sint iure error dignissimos minus quos. Facilis molestiae placeat nemo at atque quibusdam aut quis debitis iusto ipsam! Neque dolorum, magnam illo doloribus quasi amet ab ut non repellendus cupiditate!
        At assumenda vel sequi distinctio nulla velit odit, dolorem alias natus voluptate unde officia hic deleniti illo quae expedita ipsam obcaecati repellendus minus. Fuga repellat iste sapiente nam enim ea!
        Dignissimos fugiat possimus sint. Assumenda modi laudantium est laborum exercitationem cupiditate eius blanditiis deserunt autem libero, sapiente porro neque sunt dolores inventore praesentium soluta odio deleniti rem reiciendis! Omnis, beatae.
        Voluptatibus, ut fugit facilis consectetur quia quisquam pariatur! Nam labore iusto obcaecati sapiente voluptatem consequuntur sunt ad iste quis aut, ipsum nobis facilis illo officia perferendis mollitia doloremque optio culpa.
        Soluta deserunt totam maiores, minus corporis quod quaerat harum odio consectetur quisquam corrupti cumque aliquam necessitatibus sint exercitationem error eum ipsam aut enim fuga placeat dolores! Dignissimos architecto eveniet facere?
        Tempora sunt a voluptatum eaque rem, distinctio illo dolorum quos officiis ut? Perspiciatis qui aspernatur commodi quo aut quasi facilis aliquid dolor architecto iste, adipisci quas, est laudantium cupiditate molestias.
        Enim quia officia vero ex voluptatem sint nam. Sint accusantium rerum sed illum voluptate consectetur similique rem voluptatum quod ipsa impedit, explicabo vel quasi ab. Explicabo odio iure quam adipisci!
        Recusandae doloribus voluptatem id modi cumque. Nemo, beatae magni. Error sed placeat quo nam vero dolores earum illo, numquam rerum sint consequuntur mollitia nobis rem eveniet incidunt nostrum, nulla similique!
        Suscipit odio unde sint quos eveniet qui ipsum dignissimos numquam mollitia ut! Architecto eius inventore reiciendis. Illo, iure commodi vero voluptatibus voluptates non dolore, ipsam quisquam nesciunt hic quo quibusdam?
        Doloremque reiciendis expedita, assumenda adipisci aut molestias culpa minima, dolorem suscipit rem a debitis architecto, voluptates voluptatibus eius eum temporibus asperiores facilis quisquam neque error. Obcaecati rerum alias nostrum? Accusantium!
        Odit dicta illum ea eveniet officia unde. Rerum dignissimos veniam repellat fugit? Debitis ducimus id rem consequatur odit, ut tempore rerum sed officia? Fugit eum ipsum cupiditate labore sit autem!
        Voluptatum doloribus accusantium minus nisi doloremque repellendus maxime ducimus tempore suscipit, molestias eius quas nostrum dolorem nulla eveniet sint quo, totam corrupti ab consequuntur at architecto facere? Tenetur, inventore officiis.
        Veritatis vitae fuga sunt, iusto consectetur fugit voluptates ullam illo perferendis labore aut enim. Corrupti libero nemo consectetur ratione iste quia voluptas distinctio omnis voluptatem amet, sint tempora error minus?
        Quia id cum voluptates quod officia beatae optio earum accusamus quas, nihil ab non, architecto ipsum nulla eveniet, fugiat commodi esse excepturi enim similique delectus possimus recusandae! Explicabo, doloremque quibusdam.
        Aliquid ea at iste et dolore ipsa praesentium debitis temporibus ducimus. Eius nihil beatae commodi earum tempore ipsa nemo, veritatis quae nostrum optio, magnam repellat quidem accusantium amet maiores minima!
        Recusandae nesciunt exercitationem esse ea dolor quis saepe aliquam consequatur ex vero! Voluptatum itaque deleniti possimus excepturi id magnam eligendi fugit placeat! Reprehenderit, doloribus magnam. Id quis quas rerum eius?
        Eum voluptatem omnis quia distinctio aliquid nisi porro praesentium. Officiis, ex est fuga repudiandae sapiente expedita delectus, quis ullam itaque necessitatibus dolorem voluptatem doloremque consequuntur rem totam neque, magni consectetur.
        Sed cum illum deserunt accusantium temporibus ducimus, quis magni non ipsum cumque! Pariatur minus et aut, fugiat unde ipsa tenetur dolores sint, doloremque adipisci quam soluta ad, possimus tempore architecto?
        Ullam saepe mollitia exercitationem? Sint veritatis quisquam provident tempora ullam odio nostrum corporis alias dicta beatae, consectetur eos vel ipsum, ab quas! Ullam ipsum distinctio quam odit. Optio, eos harum!
        Repudiandae excepturi, voluptatibus, doloribus, quam magni voluptatum reiciendis deleniti beatae nulla itaque fugiat. Maxime ut quaerat dicta, tempora molestiae ad amet soluta porro nemo officia saepe? Veniam suscipit maxime voluptas.
        Dolore suscipit veritatis rerum. Odit dolorum id nostrum, labore ab neque praesentium itaque sint non beatae officia, tenetur sapiente minima adipisci. Aperiam quibusdam delectus quis ad unde cumque expedita at?
        Ipsum velit provident iste voluptates. Blanditiis iusto voluptatibus accusamus dolorem repudiandae tempora. Dignissimos dolorum, numquam voluptatum officiis porro laboriosam tempora unde expedita inventore impedit libero, enim nobis illum, necessitatibus vitae.
        Sint dicta quam mollitia perspiciatis sapiente non praesentium, aspernatur unde dolorum libero magnam atque suscipit et. Non officia repudiandae eos doloribus aperiam consectetur minima explicabo sint, omnis necessitatibus quidem neque.
        Quae optio labore quo voluptatem doloremque? Quasi molestias expedita officia explicabo id exercitationem alias possimus tempore voluptas, cumque dolor sapiente illo atque facilis? Est totam deserunt repellendus necessitatibus asperiores? Quas.
        Aliquid dolorem saepe provident. Sed dignissimos earum corporis recusandae id, et deleniti at asperiores hic cupiditate possimus eos voluptas culpa laudantium nemo! Eveniet vel molestias eos corporis, repellendus adipisci itaque!
        Reprehenderit molestiae iure consequatur quas et enim fugiat consequuntur odio libero architecto voluptatibus fuga veniam quisquam delectus omnis dolorem sunt, optio ea esse. Possimus esse modi, facilis tempore id magni.
        Rerum quae laudantium, magnam iusto laborum natus minima autem error aut iure sint voluptatem repudiandae fuga provident cumque earum nesciunt fugit illo recusandae non optio quia eaque porro. Suscipit, sapiente.
        Alias, corporis sint odio commodi velit porro voluptates magni fugit corrupti accusantium cum assumenda molestias. Deserunt ipsa consequuntur eum quis atque totam iusto nobis, aut voluptates, unde magnam, veritatis cumque.
        Architecto, explicabo cupiditate! Id, quasi sit illum rerum enim cum eum iusto neque voluptates, corrupti ad dignissimos eos? Facere quos reiciendis pariatur, debitis officiis alias libero odio delectus repellendus tenetur?
        Quis non fugiat reiciendis blanditiis iste iusto corporis, expedita necessitatibus harum quasi rerum nobis et natus adipisci suscipit id sunt maxime magni! Voluptates fugit cumque, odit voluptate voluptatibus porro quia.
        Possimus pariatur maxime, voluptas sapiente voluptatem eum distinctio delectus laborum natus sed amet asperiores illum error ipsa ad quasi aspernatur ratione aperiam repellat nesciunt quas fugiat! Repellat optio molestiae voluptatibus!
        Provident ab odio ullam aut tenetur quisquam quo quis labore, explicabo, iste assumenda debitis deserunt dolores quasi vero molestias illo nobis, fugit modi neque quae. Soluta tempora maxime dolorum nihil.
        Neque similique, placeat impedit consequatur ducimus ex reprehenderit nostrum rerum suscipit ipsa quibusdam nulla, incidunt distinctio odio perferendis quidem id sit mollitia doloribus omnis repellendus consectetur? Eligendi quo omnis exercitationem!
        Necessitatibus vero expedita aspernatur tempora repudiandae debitis, veniam reiciendis voluptatum sed architecto officia laudantium culpa dignissimos non accusantium quasi voluptatem! Error amet officia quidem nihil accusantium quisquam, vel deserunt quis.
        Adipisci explicabo quis maxime dolores consectetur vel est saepe delectus quibusdam alias, aliquam ullam natus quae esse, dignissimos eos molestiae? Consequuntur ipsum dolores rerum hic quidem id ratione suscipit amet!
        Eius doloribus earum quam repellat sunt voluptatibus quaerat a! Aspernatur cupiditate doloribus sint quo illo, eaque consectetur vero accusamus? Cum tempore dignissimos molestias aliquid mollitia ratione deleniti repellat ullam a.
        Asperiores ducimus ipsam nulla nobis odit, itaque laudantium eveniet unde provident, pariatur sequi dolorum doloribus adipisci iure in odio dolor accusantium? Nobis, est! Odit quidem ut impedit facere vitae repudiandae.
        Maiores eius ad aliquam earum distinctio quis aut, voluptas temporibus iure maxime? Dolorem asperiores quas perferendis facere eum reiciendis ab, explicabo dolores! Amet dolores, magni doloremque inventore cumque iusto voluptate.
        Perspiciatis iure quam totam quaerat? Doloremque voluptas distinctio laboriosam architecto reprehenderit labore expedita ut enim cupiditate. Culpa tempora natus eos repudiandae eius. Quo nisi expedita sint commodi numquam laboriosam aliquid.
        Fugit autem itaque consequuntur quas aperiam odio voluptatum quasi praesentium amet dolores? Nihil, ab qui dolor voluptatum nobis ullam fugiat soluta, iusto, aperiam et officiis dolorem quam rerum voluptates quidem!
        Aperiam, saepe quia ducimus unde esse magnam nihil. Non, beatae? Ducimus ullam maxime excepturi eos. Facilis assumenda natus cumque libero. Ad quisquam provident ipsam, similique debitis quia nulla quam delectus.
        Aut nulla possimus repudiandae soluta ullam? Architecto soluta nostrum veritatis id incidunt eius, nisi possimus magnam hic, nam nihil nemo. Neque porro tempora quasi deleniti nobis facere voluptate velit nihil.
        Illo iusto animi quasi minus iste, vitae asperiores ipsam ad magni sed. Ratione facere et maiores id in! Iure sequi est eveniet temporibus aperiam itaque error nam soluta perferendis optio?
        Soluta sint fugit eligendi saepe atque repellendus voluptatum dolorum corporis iure ex accusamus ratione perspiciatis debitis beatae natus suscipit nobis voluptate, ad rerum? Omnis adipisci ipsam quod ducimus dolor provident.
        Magni, possimus id! Quos fugiat cumque eos laudantium magni ex fugit ad quae numquam, quia commodi assumenda perspiciatis alias libero corporis blanditiis enim! Quos, tenetur beatae sed officiis consequuntur aliquid?
        Vero illum sapiente commodi voluptas velit consequuntur sunt ducimus dolor totam distinctio omnis ratione amet beatae rem voluptatibus excepturi ut assumenda, porro molestias est reiciendis! Natus ut quasi quaerat facere.
        Dignissimos consectetur, quis repellat voluptas beatae voluptatum dolore eos tenetur voluptates aliquam ipsa quia praesentium labore fuga iusto maxime nulla dicta? Odit, laudantium dignissimos est quasi iusto mollitia alias! Provident?
        Veniam consequatur deserunt voluptatem blanditiis minus, voluptates officiis eius. Vitae, animi quaerat? Voluptatibus dolorem fuga facilis laudantium in praesentium inventore odio id consectetur numquam, eos molestias unde nostrum? Quisquam, dolorum!
        Sequi reiciendis quo amet aliquam animi corporis ut, incidunt nam cupiditate, necessitatibus inventore eveniet sint suscipit facilis. Minima, eius cumque quasi molestiae ut saepe nostrum quam vitae vel nam aperiam.
        Aut, dicta magnam! Neque quo, debitis saepe autem commodi rem qui vero eligendi iusto eveniet ipsa itaque tenetur quaerat obcaecati? Id consequuntur eaque dolorum iure? Modi, ratione tempora? Saepe, ad.
        Neque deleniti sequi perferendis dolores, voluptas, nostrum vitae in provident officia quos mollitia? Nostrum odio recusandae molestiae, est non, laboriosam a dolores temporibus magnam reprehenderit ullam explicabo quidem inventore corporis?
        Iure quasi ducimus consectetur sequi dolor corrupti. Quis animi doloribus cum nisi tempore ducimus ullam ea amet nulla at a perspiciatis eos saepe et natus, temporibus maxime asperiores nostrum quod?
        Ab eius temporibus excepturi unde beatae exercitationem similique at rerum. Accusantium veniam ipsa pariatur minus temporibus eligendi nemo impedit accusamus beatae, officiis optio odio magnam corrupti expedita, odit, magni dolores.
        Incidunt tempora ab inventore quod nobis vel iste cum animi illo impedit aut, eaque, doloribus optio praesentium nesciunt facere magnam obcaecati similique aliquid maxime. Quia facere rem tempore repellat quisquam.
        Aliquid ipsa quidem neque sapiente ipsum delectus iure nam at ab tempora ea doloribus, reprehenderit, blanditiis aut repellat corrupti error velit ut. Pariatur quasi eius saepe ad laborum? Ipsum, autem.
        Consequatur et quam, perferendis harum, qui itaque molestias eum nesciunt minus adipisci explicabo culpa asperiores ullam, error unde laborum? Rerum molestiae tempora nostrum soluta ea, beatae sit eveniet quibusdam! Accusantium!
        Explicabo sit ut dicta exercitationem dignissimos quos nihil eligendi consequuntur libero. Cumque reprehenderit quos repudiandae veniam repellat sapiente, saepe, laborum eos accusantium eius magnam quas nostrum magni, qui fugiat aliquid!
        Pariatur quibusdam nemo quasi molestias ducimus, asperiores quo nihil expedita odit itaque excepturi, sed suscipit doloremque fugiat voluptatem? Aliquid fugit autem impedit sequi quae voluptatibus iusto corporis ad consectetur! Est.
        Ratione quas similique eveniet nesciunt soluta animi quis cumque ad enim aliquam nostrum corrupti, ea esse nisi incidunt libero obcaecati rerum fuga repellat repudiandae! Facere cum esse incidunt praesentium dolores.
        Sunt, expedita quisquam corporis reprehenderit exercitationem omnis beatae! Ab velit necessitatibus beatae ad delectus corporis eos doloremque accusantium, ullam inventore sit vel blanditiis eaque rerum reprehenderit expedita quod voluptate harum.
        Illum, placeat doloribus ad, reprehenderit omnis dignissimos unde cum perferendis nulla similique reiciendis inventore explicabo fugit necessitatibus aspernatur mollitia ratione minima adipisci, quae et quasi. Sunt ea esse illo aliquam?
        Quibusdam, nihil repellat laborum in doloribus doloremque, porro sequi sint quasi eum repudiandae voluptas. Magni expedita corporis vitae fuga incidunt. Labore magni ab ut alias sapiente, quaerat pariatur quia facilis.
        Nostrum qui exercitationem quibusdam eveniet dolorem voluptas id repellendus repudiandae. Reprehenderit sequi veritatis nisi? Iure dolorum dicta laborum at distinctio consectetur sequi, odit cupiditate! Nisi mollitia eaque illo nesciunt eligendi.
        Fugit eveniet aut aperiam autem, maxime cupiditate excepturi eligendi optio voluptates sapiente, at repellendus! Dolorum voluptas soluta qui ut, dolores expedita, veniam asperiores repellendus totam, vitae nulla vero. Sequi, nihil!
        Minus quasi at architecto. Voluptatum quaerat consequatur omnis itaque, nisi velit in aliquid molestiae incidunt nulla facilis repellendus commodi, error reiciendis suscipit iusto sint iste a ut! Quos, fuga libero!
        Esse vitae, tempore, aliquam, enim nostrum explicabo alias quo deleniti earum itaque voluptas illum. Et nesciunt temporibus voluptates nulla maiores minima architecto eum? Aut dolores nemo beatae pariatur quae quod?
        Nemo culpa nisi saepe doloremque porro id, dignissimos veniam repellendus exercitationem aspernatur sed? Voluptatem molestiae, quae consequatur inventore amet ullam beatae dolore perspiciatis illum tempore repellendus atque. Unde, repellendus dignissimos.
        Iste nostrum eveniet, quas molestias quae consectetur! Rem aut labore corporis veritatis ut iusto, quos ratione iure aliquid quaerat, perspiciatis asperiores illo odit! Expedita architecto perspiciatis, voluptatum cum eligendi unde!
        Sed, aliquam? Laudantium assumenda tenetur adipisci, ullam repellendus doloremque unde itaque, et ut facere iure fugiat pariatur magnam repudiandae odio ipsa doloribus illo eveniet perferendis quibusdam at, fuga deserunt reiciendis.
        Autem possimus eveniet amet delectus. Nobis sit voluptates enim laboriosam dolorem quis aliquid culpa nemo quod nostrum, sequi recusandae, odio harum id ratione accusamus, magnam excepturi pariatur laudantium esse. Quae.
        Maxime culpa dolorum quam magnam. Est libero totam neque cupiditate suscipit labore. Recusandae ab nobis eos quia saepe, architecto voluptatem ullam eveniet id autem inventore beatae, eaque reiciendis alias aliquam.
        Ipsa quo in quaerat dolores sint explicabo, illum nihil ea eum necessitatibus tempora sequi cum autem molestias rem, nemo corporis velit perspiciatis minima sit nam esse cupiditate dolorem. Exercitationem, architecto?
        Magni sed accusantium debitis distinctio rem sit dolore repudiandae harum veniam cupiditate? Autem itaque harum consequatur nulla tempora dolor ad earum! Magni doloribus dolorem expedita dolorum, rerum nobis sint explicabo!
        Voluptas ex maiores consectetur, neque velit rerum dignissimos accusantium in ipsa placeat magni beatae laudantium, numquam, quos magnam repellat. Doloremque tempora optio totam quos quidem maiores voluptate quo, sunt autem?
        Possimus perspiciatis, cupiditate id tenetur neque nisi quam magnam voluptas laudantium voluptates exercitationem dicta, quod fuga beatae? Reprehenderit dignissimos consequatur at. Asperiores corrupti deserunt commodi consequuntur suscipit dicta, eum incidunt.
        Ratione nesciunt aut tenetur modi nemo nobis ad vel cum aperiam id blanditiis labore temporibus est iure iusto quod magnam voluptates, dolores officiis aliquid ea similique earum fugit soluta. Totam.
        Amet molestias eligendi fuga aperiam veniam nulla repellendus! Hic voluptas reiciendis nemo, dolore nisi velit porro rerum illum a ullam incidunt animi soluta ex repellat, nulla at, recusandae nostrum enim.
        Cum assumenda esse ut molestiae error ipsa similique modi facere nulla. Voluptatum reiciendis nisi omnis animi unde iste harum tempore fugiat. Atque officia corporis quidem error asperiores maxime accusantium. Totam!
        Officiis delectus ab numquam ipsam. Omnis distinctio tempora earum, debitis corrupti sit deleniti blanditiis molestiae sapiente iure nam at magni ex quo quam molestias sed minima consequuntur reprehenderit necessitatibus. Minima.
        Nihil earum nesciunt fugit in, voluptates nam deserunt explicabo necessitatibus ex, quam est? Molestiae, alias excepturi consectetur sit cupiditate voluptatibus repellat, iure perspiciatis quae fugit dignissimos explicabo nisi deserunt? Impedit!
        Doloribus officia odio cum deleniti quo animi rem velit officiis, numquam dolore provident qui eius, quam, expedita repellendus ratione. Odit est nostrum nulla omnis magnam. A, sunt. Accusamus, laborum sequi!</p>}
      />
    </div>
  );
}
