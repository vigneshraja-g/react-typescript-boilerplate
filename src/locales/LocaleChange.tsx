import React from 'react'
// import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Form } from 'react-bootstrap'

const languageMap = {
  en: { label: 'English', dir: 'ltr', active: true },
  ar: { label: 'العربية', dir: 'rtl', active: false },
  fr: { label: 'Français', dir: 'ltr', active: false },
}

const LanguageSelect = () => {
  const selected: string = localStorage.getItem('i18nextLng') || 'en'

  // const { t } = useTranslation()

  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir
  }, [selected])

  function handleChange(e) {
    i18next.changeLanguage(e.target.value)
  }

  return (
    <Form.Select
      className="me-sm-2"
      id="inlineFormCustomSelect"
      onChange={(e) => {
        handleChange(e)
      }}
    >
      {Object.keys(languageMap)?.map((item: string, index) => (
        <option value={item} key={index}>
          {languageMap[item].label}
        </option>
      ))}
    </Form.Select>
  )
}

export default LanguageSelect
