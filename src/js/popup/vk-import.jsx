// @flow
import React from "react";

class VkImport extends React.Component {
  render() {
    return (
      <button className='btn btn-success'>
        Vk import
      </button>
    )
  }
}

const isVkAudioTab = (tab: ?chrome$Tab) : boolean => (
  !!tab && tab.url !== undefined && tab.url.includes('vk.com/audios')
);

export {
  VkImport,
  isVkAudioTab,
}
