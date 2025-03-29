import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';
import { useState } from 'react';
import { EXAMPLES } from '../data';

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectButton) {
    setSelectedTopic(selectButton);
  }

  let tabContent = <p>Please Select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section
      title='Examples'
      id='examples'>
      <Tabs
        buttonsContainer='menu'
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}>
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}>
              State
            </TabButton>
          </>
        }>
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
