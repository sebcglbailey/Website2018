import BreakPoint from './BreakPoint/BreakPoint';
import PalringoWebUI from './PalringoWebUI/PalringoWebUI';
import XGames from './XGames/XGames';
import Website2016 from './Website2016/Website2016';
import BumpAndGrind from './BumpAndGrind/BumpAndGrind';
import LandseerSnowboards from './LandseerSnowboards/LandseerSnowboards';
import China from './China/China'

const list = [
  "BreakPoint",
  "PalringoWebUI",
  "XGames",
  "Website2016",
  "BumpAndGrind",
  "LandseerSnowboards",
  "China"
]

const pages = {
  "BreakPoint": BreakPoint,
  "PalringoWebUI": PalringoWebUI,
  "XGames": XGames,
  "Website2016": Website2016,
  "BumpAndGrind": BumpAndGrind,
  "LandseerSnowboards": LandseerSnowboards,
  "China": China
}

const projects = {
  list: list,
  pages: pages
}

export default projects;