import { HeroSection } from './Components/pages/home/hero-section';
import { HighlightedProjects } from './Components/pages/home/highlighted-projects';
import { KnownTechs } from './Components/pages/home/known-techs';
import { WorkExperience } from "./Components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from './utils/fetch-hygraph-query';

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        
      }
      
    }
  `
  return fetchHygraphQuery(
    query,
    60 * 60 * 24
  )
}

export default async function Home() {
  const page = await getPageData();

  console.log(page)

  return (
    <>
      <HeroSection homeInfo={page} />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
      
    </>
  )
}
