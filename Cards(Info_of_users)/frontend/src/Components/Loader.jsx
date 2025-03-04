import { InfinitySpin } from 'react-loader-spinner'

import React from 'react'

function Loader() {
  return (
    <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
    />
  )
}

export default Loader