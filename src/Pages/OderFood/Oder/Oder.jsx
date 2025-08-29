import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import img from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../Hooks/UseMenu";
import OderTab from "../OderTab/OderTab";
import { useParams } from "react-router-dom";

const Oder = () => {
  const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
    const [tab, setTab] = useState(initialIndex);
    const [menu] = UseMenu();
    
    const drinks = menu.filter((item) => item.category === "drinks");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <title>Bristo Boss | Oder Food</title>
      <Cover img={img} title="OUR SHOP"></Cover>
      <Tabs defaultIndex={tab} onSelect={(index) => setTab(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <OderTab items={salad}></OderTab>
        </TabPanel>
        <TabPanel>
          <OderTab items={pizza}></OderTab>
        </TabPanel>
        <TabPanel>
          <OderTab items={soup}></OderTab>
        </TabPanel>
        <TabPanel>
          <OderTab items={dessert}></OderTab>
        </TabPanel>
        <TabPanel>
          <OderTab items={drinks}></OderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Oder
