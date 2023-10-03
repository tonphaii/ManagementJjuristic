class DirectorConstructor {
  constructor() {
    this.document_type = '', // ประเภทเอกสาร
      this.prefix = '',
      this.firstname = '',
      this.middle_name = '',
      this.lastname = '',
      this.gender = '',
      this.birthday = '',
      this.nationality = '', // สัญชาติ
      this.race = '', // เชื้อชาติ
      this.father_name = '',
      this.mother_name = ''

    this.house_id_number = '',  //เลขรหัสประจำบ้าน
      this.registration_office = '', //สำนักทะเบียน
      this.house_number = '',  //บ้านเลขที่
      this.moo = '',  //หมู่ที่

      this.condominium = '',  //อาคาร
      this.floor = '', //ชั้น
      this.village = '', //หมู่บ้าน

      this.alley = '', // ซอย
      this.lane = '',  //ตรอก

      this.province = '',
      this.district = '',
      this.subdistrict = '',

      this.zip_code = '',
      this.tel = '',
      this.fax = '', //โทรสาร

      //Juristic
      this.email = '',
      this.tax_id = '',   //เลขประจำตัวผู้เสียภาษีอากรของผู้อนุญาต
      //Director
      this.director_type = '', //ประเภทกรรมการ
      this.committee_operations = '', //การดำเนินงานของคณะกรรมการ
      this.date_started = ''

  }

}

class JuristicConstructor {
  constructor() {
    this.registration_number = '', //เลขทะเบียน
      this.juristic_type = '', //ประเภทนิติบุคคล
      this.juristic_name = '',
      this.registration_location = '',  //สถานที่ทำการ
      this.date_todo = '' //วันที่ทำรายการ

    this.house_id_number = '',  //เลขรหัสประจำบ้าน
      this.registration_office = '', //สำนักทะเบียน
      this.house_number = '',  //บ้านเลขที่
      this.moo = '',  //หมู่ที่

      this.condominium = '',  //อาคาร
      this.floor = '', //ชั้น
      this.village = '', //หมู่บ้าน

      this.alley = '', // ซอย
      this.lane = '',  //ตรอก

      this.province = '',
      this.district = '',
      this.subdistrict = '',

      this.zip_code = '',
      this.tel = '',
      this.fax = '', //โทรสาร

      //Juristic
      this.email = '',
      this.tax_id = '',   //เลขประจำตัวผู้เสียภาษีอากรของผู้อนุญาต
      //Director
      this.director_type = '', //ประเภทกรรมการ
      this.committee_operations = '', //การดำเนินงานของคณะกรรมการ
      this.date_started = ''
  }
}


export default {
  JuristicConstructor, DirectorConstructor
}
