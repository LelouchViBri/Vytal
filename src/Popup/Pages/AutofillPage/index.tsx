// import { useState, useEffect } from 'react'
// import { Box } from 'theme-ui'
import Page from '../../Components/Page'
import CheckBox from '../../Components/CheckBox'
import DebouncedInput from '../../Components/DebouncedInput'
import { Box, Label, Select } from 'theme-ui'

interface SystemPageProps {
  tab: string
}

const AutofillPage = ({ tab }: SystemPageProps) => {
  // const [ip, setIP] = useState(null)
  // const [configuration, setConfiguration] = useState('default')

  // useEffect(() => {
  //   chrome.storage.local.get(['configuration', 'ipData'], (storage) => {
  //     storage.configuration && setConfiguration(storage.configuration)
  //     if (storage.ipData) {
  //       setIP(storage.ipData)
  //     } else {
  //       Promise.resolve(getIP()).then((ipData) => setIP(ipData))
  //     }
  //   })
  // }, [])

  return (
    <Page isCurrentTab={tab === 'autofill'} title={'Autofill Options'}>
      <CheckBox title={'Disable Built-In Address Autofill'} />
      <Box sx={{ width: '100%' }}>
        <Label htmlFor="country">Country</Label>
        <Select
          name="country"
          id="browser"
          // value={browser}
          // onChange={changeBrowser}
          mb={'8px'}
        >
          {/* {Object.keys(userAgents[operatingSystem]).map((key) => (
            <option value={key} key={key}>
              {key}
            </option>
          ))} */}
        </Select>
      </Box>
      {/* <DebouncedInput
        name="userAgent"
        title="User Agent"
        value={userAgent}
        setValue={setUserAgent}
        onChange={changeUserAgent}
      /> */}
    </Page>
  )
}

export default AutofillPage