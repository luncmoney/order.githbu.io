(function(){
	var games = {
		$:function(ele){
			return document.querySelectorAll(ele);
		},
		//头部导航
		"bannerslider":function(){
			//头部导航最外层元素
			var geme_center = this.$('.geme_center')[0];
			//头部导航点击按钮
			var games_btn = this.$('.games_btn')[0];
			//头部导航的文字
			var geme_center_text = this.$('.geme_center_text')[0];
			//点击收起按钮
			var banner_list = this.$('.banner_ganem_list_fooer img')[0];
			var banner_ganem = this.$('.banner_ganem')[0];
			var needIndex = 0;
			
			games_btn.onclick = function(){
				needIndex++;
				if(needIndex%2==1){
					geme_center_text.style.display = 'none';
				}else{
					geme_center_text.style.display = 'block';
				}
				// 选图标的
				geme_center.classList.toggle('geme_listchan');
				banner_ganem.classList.toggle('show');
			};
			banner_list.onclick = function(){
				needIndex = 0;
				geme_center_text.style.display = 'block';
				geme_center.classList.remove('geme_listchan');
				banner_ganem.classList.remove('show');
			}
		},
		"bannerNewsTabs":function(){
		var allBannnerNewsLi = this.$('.banner_news_left li');
		
			var allShowLi = this.$('.banner_news_image li');
			// console.log(allShowLi);
			var zIndex = 5;
			
			for(var i = 0;i < allShowLi.length;i++){
				allShowLi[i].style.zIndex = zIndex;
				zIndex--;
			};
			for(var i = 0;i < allBannnerNewsLi.length;i++){
				allBannnerNewsLi[i].index = i;
				allBannnerNewsLi[i].onclick = function(){
					for(var i = 0;i < allBannnerNewsLi.length;i++){
						allBannnerNewsLi[i].classList.remove('active');
						allShowLi[i].classList.remove('active');
					};
					this.classList.add('active');
					allShowLi[this.index].classList.add('active');
				}
			}
		},
		"bannerTabs":function(){
			var allli = this.$(' .banner .banner_list li.banner_list_one');
			var allBtn = this.$('.click_list li');
			var zIndex = 5;
			// console.log(allli);
			var timer = null;
			
			var index = 0;
			
			var bannerArr = [
				{
					"name_text":"漫威超级战争",
					"title_text":"灭霸卷土重来",
					"bg":"img/15cba100-242b-4ccb-9a67-fd8726caa27d.jpg"
				},
				{
					"name_text":"网易游戏点卡",
					"title_text":"网易入驻淘宝天猫",
					"bg":"img/5a8fe79b-c89f-42bd-8165-ecbd6f03e4f5.jpg"
				},
				{
					"name_text":"《零号人物》",
					"title_text":"2v4手游对抗抢险",
					"bg":"img/86470216-51e8-4cc6-907c-cfb969e3d018.jpg"
				},
				{
					"name_text":"宝可梦最新剧场",
					"title_text":"影游联动开启",
					"bg":"img/d801b8b7-7475-4d79-9719-2c8eb6ee284d.jpg"
				},
				{
					"name_text":"哈利波特：魔法",
					"title_text":"全平台正式上线",
					"bg":"img/17c5610b-b620-4849-84eb-13c30edeec08.jpeg"
				}
			];
			var banner_last_btn = this.$('.list')[0];
			var banner_next_btn = this.$('.banner_next')[0];
			banner_next_btn.onmouseenter = function(){
				var next = index + 1;
				if(next == allBtn.length)next = 0;
				this.children[0].children[0].style.backgroundImage = 'url('+bannerArr[next].bg+')';
				this.children[0].children[1].innerHTML = bannerArr[next].name_text;
				this.children[0].children[2].innerHTML = bannerArr[next].title_text;
			}
			
			banner_last_btn.onclick = function(){
				index--;
				if(index==-1)index =allBtn.length-1;
				for(var i = 0;i < allBtn.length;i++){
					allBtn[i].classList.remove('active');
					allli[i].classList.remove('active');
				};
				allBtn[index].classList.add('active');
				allli[index].classList.add('active');
				
				banner_last_btn.onmouseenter();
				startTabs();
			}
			banner_next_btn.onclick = function(){
				index++;
				if(index==allBtn.length)index =0;
				for(var i = 0;i < allBtn.length;i++){
					allBtn[i].classList.remove('active');
					allli[i].classList.remove('active');
				};
				allBtn[index].classList.add('active');
				allli[index].classList.add('active');
				
				banner_next_btn.onmouseenter();
				startTabs();
			}
			
			banner_last_btn.onmouseenter = function(){
				var last = index - 1;
				if(last == -1)last = allBtn.length-1;
				this.children[0].children[0].style.backgroundImage = 'url('+bannerArr[last].bg+')';
				this.children[0].children[1].innerHTML = bannerArr[last].name_text;
				this.children[0].children[2].innerHTML = bannerArr[last].title_text;
			}
			
			for(var i = 0;i < allli.length;i++){
				allli[i].style.zIndex = zIndex;
				zIndex--;
			};
			
			for(var i =0;i < allBtn.length;i++){
				allBtn[i].index = i;
				allBtn[i].onclick = function(){
					for(var i = 0;i < allBtn.length;i++){
						allBtn[i].classList.remove('active');
						allli[i].classList.remove('active');
					};
					this.classList.add('active');
					allli[this.index].classList.add('active');
					index = this.index;
					startTabs();
				}
			};
			startTabs();
			function startTabs(){
				clearInterval(timer);
				timer = setInterval(function(){
					index++;
					if(index == allli.length)index = 0;
					for(var i = 0;i < allBtn.length;i++){
						allBtn[i].classList.remove('active');
						allli[i].classList.remove('active');
					};
					allBtn[index].classList.add('active');
					allli[index].classList.add('active');
				},5000)
			}
		},
		"hotGamesChange":function(){
			var turnAround = this.$('.groupNode_rotate')[0];
			var allLi = this.$('.games .hotgmes .listGmes .listGmes_list');
			var bl = false;
			var index = 6;
			
			var changeArr = [
				{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},
				{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},
				{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},
				{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},{
					"ewm":'img/games_ewn.png',
					"title":"游戏类型：童话MMO手游",
					"image":"img/game-list-img.png",
					"name":"《游戏王：决斗链接》",
					"showTitle":"全新游戏王GX世界版本9月2号上线。"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"100抽参与周年庆活动",
					"image":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"name":"《阴阳师：妖怪屋》",
					"showTitle":"一周年庆开启，活动得100抽！SP赤影妖刀姬"
				},{
					"ewm":'img/games_ewn.png',
					"title":"决战平安京",
					"image":"img/67ecf0ee-2ab0-433b-9eb8-ae1f826e8a59.jpeg",
					"name":"《决战！平安京》",
					"showTitle":"返校·稚语。剪刀石头布——我~出~锤！"
				}
			]
			turnAround.onclick = function(){
				if(bl)return;
				bl = true;
				setTimeout(function(){
						bl = false;
				},1050)
				
				for(var i = 0;i < allLi.length;i++){
					(function(i){
						setTimeout(function(){
							allLi[i].classList.add('scale');
							setTimeout(function(){
								if(index == changeArr.length)index = 0;
								allLi[i].children[1].src = changeArr[index].image;
								allLi[i].children[2].innerText = changeArr[index].name;
								allLi[i].children[3].innerText = changeArr[index].showTitle;
								allLi[i].children[0].children[1].children[0].innerText = changeArr[index].title;
								index++;
								allLi[i].classList.remove('scale');
							},500);
						},i*100)
					})(i)
				}
			};
		},
		"gameLinksSlider":function(){
			var linksBtn = this.$('.hide_box .hide_boxer .hide_box_btn')[0];
			var treeGemas = this.$('.treeGme')[0];
			linksBtn.onclick = function(){
				if(this.innerHTML == '查看更多'){
					this.innerText = '收起';
					treeGemas.classList.add('active');
				}else{
					this.innerText = '查看更多';
					treeGemas.classList.remove('active');
				}
			};
			linksBtn.onmousedown = function(){
				return false;
			};
		}
	}
	games.bannerslider();
	games.bannerNewsTabs();
	games.bannerTabs();
	//查看更多按钮功能
	games.gameLinksSlider();
	//热门游戏的换一换功能
	games.hotGamesChange();
})();