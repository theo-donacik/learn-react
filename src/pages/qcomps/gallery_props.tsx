interface Scientist {
  name: string,
  imgId: string,
  profession: string,
  awardCount: string,
  awards: string,
  discovered: string
}

interface GalleryProps {
  scientist: Scientist,
  size: number
}

function Profile({scientist, size=100}: GalleryProps) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={'https://i.imgur.com/' + scientist.imgId +'.jpg'}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>Awards: {scientist.awardCount} </b>
          {scientist.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discovered}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        scientist={{
          name: "Maria Skłodowska-Curie", 
          imgId: "szV5sdGs",
          profession: "physicist and chemist",
          awardCount: "4",
          awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discovered: "polonium (element)"
        }} 
        size={70}/>

      <Profile 
        scientist={{
          name: "Katsuko Saruhashi",
          imgId: "YfeOqp2s",
          profession: "geochemist",
          awardCount: "2",
          awards: "((Miyake Prize for geochemistry, Tanaka Prize)",
          discovered: "a method for measuring carbon dioxide in seawater"
        }}
        size={70}
      />

    </div>
  );
}
