function abbrevName(name){
  splitname = name.split(" ")
  firstname = splitname[0]
  lastname = splitname[1]
  firstInitial = firstname.charAt(0)
  secondInitial = lastname.charAt(0)
  return firstInitial+ "." +secondInitial
    // code away

}
