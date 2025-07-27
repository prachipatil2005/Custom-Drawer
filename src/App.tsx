import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
// import CustomModal from "../components/common/CustomModal"; // adjust path as per your structure
import CustomModal from "./CustomModalSS";

export default function ApprovalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} colorScheme="teal">
        Open Custom Modal
      </Button>

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleClose}
        header="My Modal Header"
        isResizable={true}
        numberOfSections={2}
        sectionLayout="vertical"
        // body={
        //   <div>
        //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
        //     placeat cum quisquam nisi quasi quam consectetur qui libero modi.
        //     Deleniti eaque pariatur assumenda tempora accusantium beatae
        //     quisquam necessitatibus quae nobis? Nulla rem vitae harum ipsa
        //     saepe. Culpa earum similique dolorem fuga molestias veniam minus
        //     corrupti, et voluptas sapiente suscipit dolore minima soluta
        //     architecto, officiis exercitationem ratione rem totam quidem
        //     expedita. Dignissimos perspiciatis repudiandae facilis ipsam quis
        //     cupiditate corporis sequi quibusdam molestias quod? Neque ratione
        //     sit quis ipsam corporis reprehenderit sunt recusandae modi? Eveniet
        //     eum atque nemo quod quaerat illo labore! Sed, illum. Impedit
        //     obcaecati, veniam qui in explicabo error aperiam reprehenderit odio
        //     ex. Blanditiis quae unde qui similique officia error atque? Cum
        //     repellat sint, impedit iste atque error iusto eveniet. Dicta aperiam
        //     sequi cum sunt reprehenderit, corporis maxime, natus fuga ex
        //     perspiciatis quia sint distinctio adipisci, harum dolores aut!
        //     Dolorum, minima cum quas vitae quia aperiam animi nesciunt porro
        //     obcaecati? Repellendus earum facilis voluptatem vitae vero aliquid,
        //     ipsam culpa debitis fugiat hic quidem nobis harum. Cupiditate iusto
        //     cumque molestias sapiente similique, laboriosam amet ducimus tempore
        //     delectus alias, ad tempora blanditiis. Dolore minus illum recusandae
        //     culpa praesentium nulla? Optio totam nemo, magnam at fuga nam
        //     suscipit eum saepe rem aspernatur, dicta et non ducimus similique,
        //     labore velit amet tempora quis repudiandae. Ipsam necessitatibus
        //     inventore optio voluptatibus rerum eaque dicta distinctio omnis
        //     officiis perspiciatis quasi aperiam similique libero placeat
        //     repellat reprehenderit esse explicabo quia accusantium, saepe
        //     pariatur vero ducimus ab sit? Ex. Natus doloremque praesentium sed
        //     neque, ipsam voluptatem tenetur explicabo dolor blanditiis delectus
        //     aspernatur aperiam sapiente laboriosam doloribus recusandae molesut
        //     perspiciatis assumenda sed iusto distinctio. Asperiores. Iste cum,
        //     natus quasi maiores, molestiae beatae, sint animi quis porro autem
        //     consequuntur. Nihil quis reprehenderit libero consequatur sit, saepe
        //     placeat quaerat nostrum. Assumenda a consequatur vitae, tenetur
        //     reprehenderit iste. Eum distinctio pariatur recusandae harum debitis
        //     voluptatum cum perferendis magnam aut adipisci quo explicabo neque
        //     necessitatibus dolore expedita in, ducimus consequuntur eaque
        //     laborum? Excepturi deserunt quae maiores hic iure aut. Repellat
        //     quidem quasi perspiciatis maiores unde dolorum illum ad doloremque
        //     aperiam deleniti beatae, minima distinctio vitae itaque placeat
        //     doloribus assumenda vero natus! Necessitatibus in quo ab labore
        //     dicta harum molestias? Consequatur in eos reprehenderit, dignissimos
        //     inventore soluta quam dolor unde ullam distinctio temporibus a amet,
        //     optio consequuntur minima ex odit iste doloremque itaque nam, sed
        //     debitis totam aspernatur praesentium! Repellendus. In molestiae
        //     temporibus animi quidem sit hic. Eaque assumenda pariatur sed
        //     tenetur iusto harum aspernatur. Distinctio, dolorum placeat numquam
        //     ratione ab nihil enim, iste dolorem sunt repellendus est illum!
        //     Dolorem! Soluta natus ducimus porro ratione eum, officia sequi
        //     consequatur odit necessitatibus alias facere saepe inventore,
        //     molestias totam doloribus voluptatum, nulla animi maxime error enim
        //     labore neque doloremque impedit ea! Obcaecati. Fugiat sint nam
        //     mollitia eos culpa! Recusandae, laudantium nemo. Beatae, reiciendis
        //     hic fuga et deleniti iure tenetur expedita repudiandae. Odio
        //     officiis laborum exercitationem ipsum accusamus veritatis odit magni
        //     nobis corrupti? Vitae reiciendis odit dolore architecto fugiat, sed
        //     doloribus quaerat ad cum reprehenderit quam nemo nostrum debitis
        //     repellat corporis amet a odio iusto ullam accusamus labore
        //     repellendus. Architecto corrupti dolore assumenda. Molestias nam,
        //     rerum quisquam magnam odit ab magni error nemo a ipsa explicabo enim
        //     et at dicta iusto eaque ut, numquam reiciendis eos adipisci aliquid.
        //     Excepturi consequatur magnam exercitationem sed? Rem dolorum modi
        //     voluptate reprehenderit itaque saepe nihil quam vitae asperiores
        //     velit labore ratione sed quisquam porro, quo eveniet atque aperiam
        //     quidem et adipisci repellendus! Debitis voluptatem eius totam. Iste.
        //     Rem velit corrupti sequi dolorum maxime commodi, delectus odit
        //     deleniti quae debitis. Sint, eaque quae possimus ipsa accusamus
        //     impedit eum, molestias animi provident nihil consequuntur quaerat
        //     cum unde minima tempora? Molestias obcaecati iste quos dolore,
        //     reiciendis sapiente repellat suscipit magnam accusamus quibusdam
        //     esse! Natus minima, vel nam, incidunt facilis repudiandae sit iste
        //     aliquid beatae ducimus est aspernatur, culpa quos nostrum! Culpa
        //     laboriosam illum vel nostrum debitis. Temporibus tenetur tempore
        //     soluta iure in. In dolores numquam, veritatis laudantium eos facere
        //     velit beatae recusandae accusantium est dicta natus quia atque
        //     cumque eius. Ex unde delectus eius quaerat, fugit odio voluptate
        //     accusamus fugiat enim id error sint nam voluptatem cumque
        //     dignissimos incidunt sunt omnis numquam architecto nihil velit!
        //     Consequatur fuga eius expedita neque. Quod quaerat inventore sed
        //     consectetur tempora sit ut sint pariatur distinctio esse ducimus
        //     repellat harum possimus id reprehenderit asperiores nobis ab dolor,
        //     exercitationem assumenda. Nemo reiciendis error nisi itaque
        //     accusantium. Quo, temporibus officia? Repellat adipisci, odio
        //     ratione nobis sint aliquid ducimus exercitationem quae explicabo
        //     autem voluptatem, tempore corrupti recusandae illo sed! Atque hic
        //     officia perspiciatis, numquam quasi voluptatibus aliquam cupiditate.
        //     Illum libero iste provident, consequuntur ut architecto deserunt
        //     dolore minus non doloribus facere repellendus nam voluptatum
        //     recusandae exercitationem. Nam quibusdam beatae expedita, enim
        //     molestiae labore impedit voluptatem omnis unde. Repellendus. Ratio
        //     culpa consequatur, voluptatibus eius id dignissimos deleniti
        //     incidunt aperiam. Excepturi a, dolores culpa deleniti quidem dolore
        //     porro quam illo totam praesentium? Hic, sunt numquam. Veritatis,
        //     minima, sequi quisquam cum suscipit architecto impedit omnis veniam
        //     reiciendis esse aliquid et voluptatibus earum npit sapiente qui
        //     vitae velit ab excepturi tempora maiores repellat est fuga iste,
        //     adipisci cupiditate officia debitis ex quos possimus facere veniam
        //     quis aperiam. Fugiat, fuga aspernatur. Aut ipsum quos explicabo
        //     corporis, officiis cupiditate nisi ut reiciendis harum, sequi
        //     aliquam rerum maxime itaque temporibus aliquid aspernatur officia
        //     voluptates et quidem? Autem iusto, mollitia quos totam id
        //     asperiores. Error provident dolorum dicta commodi delectus doloribus
        //     cupiditate voluptate doloremque. A vel quia tempore dicta dolore
        //     sequi sit enim ipsum necessitatibus. Autem eum quisquam unde, nisi
        //     aperiam distinctio ratione maiores? Itaque voluptatibus quisquam
        //     sunt veniam blanditiis earum non dolorum sed nostrum corrupti labore
        //     odio saepe excepturi quos, voluptatem repellat ea reprehenderit
        //     officia harum ipsam perferendis incidunt. Delectus at alias vel.
        //     Error perferendis eum quam ab, iste ullam id iusto nemo odit dolores
        //     rerum quis dicta fugiat libero, voluptatem, veniam ea dolorum esse
        //     cupiditate odio ex. Id dolorem minima tempora ab? Eius corrupti
        //     incidunt quibusdam perspiciatis repudiandae repellendus officia sunt
        //     velit consequatur optio animi, quia maxime praesentium nemo
        //     voluptates rem harum pariatur in rerum suscipit nisi aut. Beatae in
        //     rem possimus. Nihil quod voluptatibus amet tenetur? Nihil quisquam,
        //     tempora tenetur repudiandae, iste id sed quae quis quibusdam
        //     voluptatibus facere provident numquam commodi sint voluptate. Animi
        //     quibusdam quam inventore commodi culpa quaerat? Accusantium, aliquam
        //     quam! Odio laudantium cupiditate iure optio deserunt nulla ipsam
        //     amet odit tenetur enim maxime voluptatibus ut, quibusdam aliquam ea
        //     consequuntur. Labore nam voluptatum deserunt nemo, enim cumque
        //     dolorum. Molestias modi, adipisci laudantium quam cumque repellat
        //     repellendus nisi natus id tempore officiis, nostrum animi ducimus
        //     libero. Similique ad quod sit corrupti eum, velit unde nisi
        //     provident rem, quis delectus!
        //   </div>
        // }

        footer={
          <>
            <Button colorScheme="teal" onClick={handleClose}>
              Save
            </Button>

            <Button colorScheme="red" onClick={handleClose}>
              Cancel
            </Button>
          </>
        }
        width="50vw"
        animationDuration="0.6s"
        overlayBlur="4px"
        backgroundColor="white"
        padding="6"
        footerAlign="center"
      />
    </div>
  );
}
