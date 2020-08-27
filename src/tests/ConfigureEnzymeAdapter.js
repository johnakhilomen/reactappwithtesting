import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

class ConfigureEnzymeAdapter {
 
    init = () => Enzyme.configure({adapter: new EnzymeAdapter()})

}
 
export default new ConfigureEnzymeAdapter();