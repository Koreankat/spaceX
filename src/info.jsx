import { useState } from "react"

export default function Info() {
  const [infos, setInfos] = useState(information)

  return (
    <div className='info'>
      {infos.map((info) => (
        <section>
          <h1 className='h1'>{info.date}</h1>
          <h4 className='text'>{info.description}</h4>
          <img className='img' src={info.url} alt='img' />
        </section>
      ))}
    </div>
  )
}
const information = [
  {
    id: 0,
    date: "14 march 2002",
    description:
      "In 2002, SpaceX was just a tiny space startup with a few employees.As part of its mission to reduce the cost of space travel," +
      " SpaceX embarked on a journey of making reusable rockets a reality.",
    url: "https://techstartups.com/wp-content/uploads/2022/03/Musk-in-2002.jpg",
  },
  {
    id: 1,
    date: "4 June 2010",
    description:
      "On June June 4, 2010, the inaugural launch of a Falcon 9 rocket took place after five launches of a previous vehicle called" +
      " the Falcon 1",
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/in-this-spacex-handout-image-a-falcon-9-rocket-carrying-the-news-photo-1591219555.jpg",
  },
  {
    id: 3,
    date: "18 April 2014",
    description:
      "on April 18, 2014, SpaceX launched a Falcon 9 rocket for a third resupply mission to the ISS, this time with landing legs," +
      " and becomes “the first to successfully perform a controlled ocean splashdown,” according to the MIT Technology Review.",
    url: "https://www.universetoday.com/wp-content/uploads/2014/04/SpaceX-3_Jeff-Seibert.jpg",
  },
  {
    id: 4,
    date: "10 January  2015",
    description:
      "on November 23, 2015: Blue Origin, the private space company founded by Amazon’s Jeff Bezos, successfully launched and landed" +
      " its New Shepard rocket",
    url: "https://www.gannett-cdn.com/media/2015/01/10/Brevard/Brevard/635564669347793016-crb011015-spacex-.jpg?width=640",
  },
  {
    id: 5,
    date: " 23 November 2015",
    description:
      "On January 10, 2015, SpaceX made the first attempt to achieve the vertical landing of a Falcon 9 rocket onto a solid surface," +
      " in this case, an “autonomous spaceport drone ship” floating in the ocean near the Cape Canaveral launch site, but the launched ended in a crash. But the crash didn’t stop Musk from pressing forward.",
    url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/03/10/bluerocket2.jpg?quality=75&width=1200&auto=webp",
  },
  {
    id: 6,
    date: " 21 December 2015",
    description:
      "on December 21, 2015, SpaceX successfully landed its Falcon 9 rocket upright for the first time. In a tweet, Musk said: " +
      "“11 satellites deployed to target orbit and Falcon has landed back at Cape Canaveral Welcome back, baby!”",
    url: "https://scontent.fcmn1-2.fna.fbcdn.net/v/t1.6435-9/131596629_3591596180894493_2878990871794827927_n.png?_nc_cat=104&_nc_map=test-rt&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGSSCsEegxtr0MA03TEQRJhaW0RjFwqwENpbRGMXCrAQ2ryupzfV_zPp09kXjCPPknUGZ05WbbTF3cPuaaN3hBi&_nc_ohc=QQLxFv4kVUgAX_CErGG&_nc_ht=scontent.fcmn1-2.fna&oh=00_AT-GNpz7R_Bxb3A8jcPbYjnhLMYvKsJxHR5tF_i4yQ9ZrQ&oe=62665906",
  },
  {
    id: 7,
    date: " March 2017",
    description:
      "Later in March 2017, SpaceX launched a returned Falcon 9 for the SES-10 satellite. This was the first time a re-launch of " +
      "a payload-carrying orbital rocket went back to space. The first stage was recovered again, also making it the first landing of a reused orbital class rocket.",
    url: "https://www.teslarati.com/wp-content/uploads/2018/08/SES-10-B1020-landing-March-2017-SpaceX.jpg",
  },
  {
    id: 8,
    date: " 30 may 2020",
    description:
      "Then on May 30, 2020, SpaceX made history after the company successfully carried two NASA astronauts into space from American " +
      "soil after nearly a decade, making Space X the first commercial company to take humans into space.",
    url: "https://i.guim.co.uk/img/media/806f1d0b19691d44402e178555b584db7c266e0c/0_130_3932_2360/master/3932.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=b802307a86f1917cf8c18adee4b549ff",
  },
  {
    id: 9,
    date: " TO date",
    description:
      "To date, SpaceX’s achievements include the first privately funded liquid-propellant rocket to reach orbit (Falcon 1 in 2008)," +
      " the first private company to successfully launch, orbit, and recover a spacecraft (Dragon in 2010), the first private company to send a spacecraft to the International Space Station (Dragon in 2012), the first propulsive landing for an orbital rocket (Falcon 9 in 2015), the first reuse of an orbital rocket (Falcon 9 in 2017), the first private company to launch an object into orbit around the Sun (Falcon Heavy’s payload of a Tesla Roadster in 2018), and the first private company to send astronauts to the International Space Station (Dragon 2 in 2020)." +
      "SpaceX’s Crew Dragon capsule delivered NASA astronauts Bob Behnken and Doug Hurley to the International Space Station in May, marking the first U.S. space capsule to do so with a crew since 2011.",
    url: "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/11/Elon-Musk-SpaceX.jpg",
  },
]
