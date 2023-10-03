

export default function ValidationForm() {
  const noSideSpace = (value) => {
    return !/ /g.test(value)
  }


  const requiredInput = (value) => {
    return !!value || `${value} is required`

  }

  const numberOnly = (value) => {
    return /^[\d]+$/.test(value) || `Must be number only`
  }

  const email = (value) => {

    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'Email must be valid'
  }

  const phoneNumber = () => {
    //
  }

  const checkName = (value) => {
    if (value?.length >= 2) return true
  }


  return {
    noSideSpace, requiredInput, numberOnly, email, phoneNumber, checkName
  }
}
