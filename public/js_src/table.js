new Vue({
  el: '#vapp',
  data: {
    tr: [
      {
        id:1,
        rank:1,
        teamname:'ブルーＳC',
        planet:'地球',
        points:101
      },
      {
        id:2,
        rank:2,
        teamname:'FCウェヌス',
        planet:'金星',
        points:83
      },
      {
        id:3,
        rank:3,
        teamname:'ジュピターFC',
        planet:'木星',
        points:68
      },
      {
        id:4,
        rank:4,
        teamname:'SCマーキュリー',
        planet:'水星',
        points:67
      },
      {
        id:5,
        rank:5,
        teamname:'FCマルス',
        planet:'火星',
        points:65
      },
    ]
  },
  methods:{
    del_row :function(index) {
      this.tr.splice(index,1);
    }
  }
})
