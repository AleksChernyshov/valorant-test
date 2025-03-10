import { Tabs } from '@mantine/core';
import classes from './RegionTabs.module.css';

const tabs = [
  { value: 'eu', name: 'Europe' },
  { value: 'ap', name: 'Asia' },
  { value: 'na', name: 'North America' },
  { value: 'kr', name: 'Korea' },
  { value: 'latam', name: 'Latin America' },
  { value: 'br', name: 'Brazil' }
];

type Props = {
  setCurrentRegion: (region: string) => void;
};

const RegionTabs = ({ setCurrentRegion }: Props) => {
  return (
    <Tabs
      defaultValue="eu"
      variant="outline"
      classNames={{
        root: classes.tabs,
        list: classes.tabsList,
        tab: classes.tab,
      }}
      onChange={(current) => current && setCurrentRegion(current)}
    >
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab value={tab.value} key={tab.value} className={classes.tab}>
            {tab.name}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
};

export default RegionTabs;
