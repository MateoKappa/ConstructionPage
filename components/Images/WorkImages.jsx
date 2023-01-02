function WorkImages() {
  let images = [
    {
      images: "https://i.imgur.com/NP7hgzI.jpg",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/273160253_5173593966007043_3249542806498463870_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=CKbh0BYY4mEAX9oz4o0&_nc_ht=scontent.fskg1-2.fna&oh=00_AfBAOgns0t21Gyh3Tb8oUg61S5O56fFfB7xrfyKfdlZTzw&oe=63B84CDD",
    },

    {
      images: "https://i.imgur.com/c5iVXJ2.jpg",
    },

    {
      images: "https://i.imgur.com/I34GP40.jpg",
    },

    {
      images: "https://i.imgur.com/aITK5GD.jpg",
    },
    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/273052078_5173694802663626_7886629078744781617_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=hFxVolAPeoUAX_CNnzS&_nc_ht=scontent.fskg1-1.fna&oh=00_AfAZOZV_Fx2TvlCkd5U56Owksf3T5mhixoblP3ROewHaiw&oe=63B78C7E",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/232508686_4553419578024488_3320050184640486426_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=XOzJc6MKubkAX9HpH7X&_nc_ht=scontent.fskg1-2.fna&oh=00_AfB7CvgVKmzvZDBB3RekZn6zAcBJXB8H8n2BPghCalixiw&oe=63B74AE4",
    },
    {
      images: "https://i.imgur.com/B6HvnwD.png",
    },
    {
      images: "https://i.imgur.com/VHNDE73.png",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/231329662_4553419544691158_897610571815863312_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=9YVp1kAL_rIAX9x7jcF&tn=dTi1-TBYIlf2vV8j&_nc_ht=scontent.fskg1-2.fna&oh=00_AfCw0cm80ZJJjpHG2fh1WXKVjwjfG9wiLBzzkFFeqfZiMw&oe=63B7D0C1",
    },
    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/277538665_5342044435828661_5426530378212590831_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=DNhzUomcT8gAX_s1ihr&_nc_ht=scontent.fskg1-1.fna&oh=00_AfBVsNdtY1liSaLyt-132LFt_4bWQdEl8ZQTMbUpsotHKg&oe=63B8C427",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/277668517_5342044432495328_6435075287812265146_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=4SHkaH0YQugAX9ugM3O&_nc_ht=scontent.fskg1-2.fna&oh=00_AfDgRnGFUzzd6eLS1RaUTTYBBzxbdKikEQKS4pkFs9VY1w&oe=63B8D20F",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/277467269_5342044025828702_498370591235963881_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=_Vwvnphp3FAAX8YpgC0&_nc_ht=scontent.fskg1-2.fna&oh=00_AfCPtbP93xVG_lxN5h_dn297I2xIKTL_9E1FIpvg1sibuQ&oe=63B733ED",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/277512471_5342043579162080_3894900005116676661_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=g8AJzHuSmFsAX_BYtyv&_nc_ht=scontent.fskg1-2.fna&oh=00_AfAD1f5ZNS2Z1W7yWDyMxvOSbNl_IulvBiirhfe2ILZ0cg&oe=63B84E67",
    },
    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/273113884_5173695042663602_8485533794184650193_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=aeuM7ELG5MUAX8sw3PL&tn=dTi1-TBYIlf2vV8j&_nc_ht=scontent.fskg1-1.fna&oh=00_AfDN0GXFT7A9I7e8xh7XuOvCT0HLnBU8eTWg7oualsjT3w&oe=63B787BE",
    },
    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/273173194_5173595576006882_867678572571094577_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=TwoKdzGGV8EAX9izRDT&tn=dTi1-TBYIlf2vV8j&_nc_ht=scontent.fskg1-1.fna&oh=00_AfA3OUTTnJJNFbjTX7IvzVzobtu0__5v-FGpzQ6mJ8flJA&oe=63B8D5FC",
    },

    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/273146111_5173594876006952_5651650976969586023_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=STLK3Hew9GEAX-4HpWh&_nc_ht=scontent.fskg1-1.fna&oh=00_AfDETcuGwx822e4aw70DW62a4huYyi4SvZT1-CcZFuXf-g&oe=63B83EDD",
    },
    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/273172094_5173594406006999_5501135544497185626_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=mld6DrJP6WkAX_dJiaC&_nc_ht=scontent.fskg1-1.fna&oh=00_AfCQrRPDBSsXgTObz715TmF7z983ptOrHcFR8eH0Yt6iHQ&oe=63B8CAAE",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/273002379_5173594269340346_2930078961261379716_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=534P3j6dW5cAX9ftCHh&tn=dTi1-TBYIlf2vV8j&_nc_ht=scontent.fskg1-2.fna&oh=00_AfBiV5t7nBQnABz6-55-7ffqbl3AMgWQbgnxiJBQPfsf9Q&oe=63B8D6BC",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/267565366_4992998867399888_6429542530062782997_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=dQI_ImX4Q-AAX9vu-LS&_nc_oc=AQlUa6_Vj0Eqg3nTedEViGj04Kx5486PiQqdD1zuS_cwUYVQk1nq4CgFAxBOjGaO7is&tn=dTi1-TBYIlf2vV8j&_nc_ht=scontent.fskg1-2.fna&oh=00_AfAZF_5eTP4bSGR3On-L7YpMu207tga2auCc7fz2A9kzZQ&oe=63B7867A",
    },
    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/261664471_4924309690935473_3676277044833234191_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=OMv2lR2AhIYAX8AUFp7&_nc_ht=scontent.fskg1-1.fna&oh=00_AfD_u022Uf58ub8pSNxwjVSqOhSjpmejxJEYBhfDnab72g&oe=63B73307",
    },
    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/260758455_4924309510935491_5197427828652093112_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=vtAf57dBlzsAX-i6Zjb&_nc_ht=scontent.fskg1-1.fna&oh=00_AfBFhKDQ0VR25vXKvt2fkBFs_Yqn4FVkoR_zbx4pOCSoIQ&oe=63B81D77",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/245702202_4790967410936369_8680923421771579702_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=CShVGpz8la8AX-H3PP6&tn=dTi1-TBYIlf2vV8j&_nc_ht=scontent.fskg1-2.fna&oh=00_AfCrDadWaw9snMFkl3l-PORqX3YAFXFnDfcln7xQk1geFw&oe=63B83A14",
    },
    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/246288777_4790967010936409_7332351856110870784_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=DPs3w_bbmH0AX_T5FOo&_nc_ht=scontent.fskg1-1.fna&oh=00_AfCl4r-96ZCZ3UCK0cK1irwm2yDZHuaCbWhrebTfjPUJ5g&oe=63B6EFD5",
    },
    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/245651840_4790966977603079_8116573008325654999_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=v5yu8ih4S7QAX90Krs4&_nc_ht=scontent.fskg1-1.fna&oh=00_AfD0mzd_C6sgryWafE89Qu9YI7kt6EM8YuHot5W5YZcAtQ&oe=63B76BA7",
    },
    {
      images:
        "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/243286171_4727520383947739_6729692267908832655_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=tTwn-KOdmY4AX9D5j7X&tn=dTi1-TBYIlf2vV8j&_nc_ht=scontent.fskg1-1.fna&oh=00_AfALUwixAL9VSOD_-7eRZMB8AqEF5P_2eKC8vImXpWV6yw&oe=63B836D1",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/243721160_4727520377281073_4607509680381387985_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=OoE6C5FkFi8AX_oiFz1&_nc_ht=scontent.fskg1-2.fna&oh=00_AfBUgPeqzIsOwT3awCFLOwlNX32Ua6SwA8-72FpcleBbMg&oe=63B861A4",
    },
    {
      images:
        "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/242684072_4703688742997570_7473933707595990801_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=WBs6uv0AkssAX8epowa&_nc_ht=scontent.fskg1-2.fna&oh=00_AfBOkd3CoeqRm8fEVkls_ayzsI2lk9EyUxUFK4_DwiuM3Q&oe=63B84B4F",
    },
    {
      images: "https://i.imgur.com/Q1mlQRU.png",
    },
    {
      images: "https://i.imgur.com/0qmMoSN.png",
    },
  ];
  return {images};
}

export default WorkImages;
