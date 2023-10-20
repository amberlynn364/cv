import Box from '@mui/material/Box';
import { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { hardSkills, softSkills } from '../../../data/skills';
import SkillsList from '../SkillsList/SkillsList';
import { StyledTab, StyledTabs } from './SkillsTabsUtility';

export default function SkillsTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={String(value)}>
        <Box>
          <StyledTabs value={value} onChange={handleChange}>
            <StyledTab label="Hard Skills" />
            <StyledTab label="Soft Skills" />
          </StyledTabs>
          <Box sx={{ p: 1 }} />
        </Box>
        <TabPanel value="0" style={{ padding: 0, paddingTop: '20px' }}>
          <SkillsList skills={hardSkills} />
        </TabPanel>
        <TabPanel value="1" style={{ padding: 0, paddingTop: '20px' }}>
          <SkillsList skills={softSkills} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
