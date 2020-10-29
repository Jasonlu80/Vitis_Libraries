Search.setIndex({docnames:["guide_L1/api","guide_L1/internals","guide_L1/namespace_xf_graph","guide_L1/namespace_xf_graph_enums","guide_L1/primitives/denseSimilarity","guide_L1/primitives/generalSimilarity","guide_L1/primitives/similarityOverview","guide_L1/primitives/sortTopK","guide_L1/primitives/sparseSimilarity","guide_L2/api","guide_L2/internals","guide_L2/kernels/BFS","guide_L2/kernels/CalcuDgree","guide_L2/kernels/ConnectedComponent","guide_L2/kernels/ConvertCscCsr","guide_L2/kernels/LabelPropagation","guide_L2/kernels/PageRank","guide_L2/kernels/PageRankMultiChannels","guide_L2/kernels/ShortestPath","guide_L2/kernels/StronglyConnectedComponent","guide_L2/kernels/TriangleCount","guide_L3/L3_internal/api_class","guide_L3/L3_internal/api_func","guide_L3/L3_internal/getting_started","guide_L3/L3_internal/user_model","guide_L3/api","guide_L3/utilization_L3","index","overview","plugin/tigergraph_integration","release","rst_L2/class_xf_graph_internal_pagerankMultiChannel_cache","rst_L2/namespace_xf","rst_L2/namespace_xf_graph","rst_L2/namespace_xf_graph_internal","rst_L2/namespace_xf_graph_internal_bfs","rst_L2/namespace_xf_graph_internal_calc_degree","rst_L2/namespace_xf_graph_internal_connected_components","rst_L2/namespace_xf_graph_internal_convert_csr_csc","rst_L2/namespace_xf_graph_internal_hash_group_aggregate","rst_L2/namespace_xf_graph_internal_label_propagation","rst_L2/namespace_xf_graph_internal_mssp","rst_L2/namespace_xf_graph_internal_pagerank","rst_L2/namespace_xf_graph_internal_pagerankMultiChannel","rst_L2/namespace_xf_graph_internal_scc","rst_L2/namespace_xf_graph_internal_sssp","rst_L2/namespace_xf_graph_internal_sssp_nopred","rst_L2/namespace_xf_graph_internal_sssp_pred","rst_L2/namespace_xf_graph_internal_triangle_count","rst_L2/struct_xf_graph_internal_hash_group_aggregate_COLUMN_DATA","rst_L2/union_xf_graph_internal_calc_degree_f_cast","rst_L2/union_xf_graph_internal_calc_degree_f_cast-2","rst_L2/union_xf_graph_internal_calc_degree_f_cast-3","rst_L2/union_xf_graph_internal_calc_degree_f_cast-4","rst_L2/union_xf_graph_internal_calc_degree_f_cast-5","rst_L2/union_xf_graph_internal_f_cast","rst_L2/union_xf_graph_internal_f_cast-2","rst_L2/union_xf_graph_internal_f_cast-3","rst_L2/union_xf_graph_internal_f_cast-4","rst_L2/union_xf_graph_internal_f_cast-5","rst_L2/union_xf_graph_internal_f_cast-6","rst_L2/union_xf_graph_internal_f_cast-7","rst_L3/class_xf_graph_L3_Handle","rst_L3/namespace_xf","rst_L3/namespace_xf_graph","rst_L3/namespace_xf_graph_L3","rst_L3/struct_xf_graph_L3_Handle_singleOP"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["guide_L1/api.rst","guide_L1/internals.rst","guide_L1/namespace_xf_graph.rst","guide_L1/namespace_xf_graph_enums.rst","guide_L1/primitives/denseSimilarity.rst","guide_L1/primitives/generalSimilarity.rst","guide_L1/primitives/similarityOverview.rst","guide_L1/primitives/sortTopK.rst","guide_L1/primitives/sparseSimilarity.rst","guide_L2/api.rst","guide_L2/internals.rst","guide_L2/kernels/BFS.rst","guide_L2/kernels/CalcuDgree.rst","guide_L2/kernels/ConnectedComponent.rst","guide_L2/kernels/ConvertCscCsr.rst","guide_L2/kernels/LabelPropagation.rst","guide_L2/kernels/PageRank.rst","guide_L2/kernels/PageRankMultiChannels.rst","guide_L2/kernels/ShortestPath.rst","guide_L2/kernels/StronglyConnectedComponent.rst","guide_L2/kernels/TriangleCount.rst","guide_L3/L3_internal/api_class.rst","guide_L3/L3_internal/api_func.rst","guide_L3/L3_internal/getting_started.rst","guide_L3/L3_internal/user_model.rst","guide_L3/api.rst","guide_L3/utilization_L3.rst","index.rst","overview.rst","plugin/tigergraph_integration.rst","release.rst","rst_L2/class_xf_graph_internal_pagerankMultiChannel_cache.rst","rst_L2/namespace_xf.rst","rst_L2/namespace_xf_graph.rst","rst_L2/namespace_xf_graph_internal.rst","rst_L2/namespace_xf_graph_internal_bfs.rst","rst_L2/namespace_xf_graph_internal_calc_degree.rst","rst_L2/namespace_xf_graph_internal_connected_components.rst","rst_L2/namespace_xf_graph_internal_convert_csr_csc.rst","rst_L2/namespace_xf_graph_internal_hash_group_aggregate.rst","rst_L2/namespace_xf_graph_internal_label_propagation.rst","rst_L2/namespace_xf_graph_internal_mssp.rst","rst_L2/namespace_xf_graph_internal_pagerank.rst","rst_L2/namespace_xf_graph_internal_pagerankMultiChannel.rst","rst_L2/namespace_xf_graph_internal_scc.rst","rst_L2/namespace_xf_graph_internal_sssp.rst","rst_L2/namespace_xf_graph_internal_sssp_nopred.rst","rst_L2/namespace_xf_graph_internal_sssp_pred.rst","rst_L2/namespace_xf_graph_internal_triangle_count.rst","rst_L2/struct_xf_graph_internal_hash_group_aggregate_COLUMN_DATA.rst","rst_L2/union_xf_graph_internal_calc_degree_f_cast.rst","rst_L2/union_xf_graph_internal_calc_degree_f_cast-2.rst","rst_L2/union_xf_graph_internal_calc_degree_f_cast-3.rst","rst_L2/union_xf_graph_internal_calc_degree_f_cast-4.rst","rst_L2/union_xf_graph_internal_calc_degree_f_cast-5.rst","rst_L2/union_xf_graph_internal_f_cast.rst","rst_L2/union_xf_graph_internal_f_cast-2.rst","rst_L2/union_xf_graph_internal_f_cast-3.rst","rst_L2/union_xf_graph_internal_f_cast-4.rst","rst_L2/union_xf_graph_internal_f_cast-5.rst","rst_L2/union_xf_graph_internal_f_cast-6.rst","rst_L2/union_xf_graph_internal_f_cast-7.rst","rst_L3/class_xf_graph_L3_Handle.rst","rst_L3/namespace_xf.rst","rst_L3/namespace_xf_graph.rst","rst_L3/namespace_xf_graph_L3.rst","rst_L3/struct_xf_graph_L3_Handle_singleOP.rst"],objects:{},objnames:{},objtypes:{},terms:{"09x":19,"128m":17,"15x":13,"16k":12,"1slr":16,"260mhz":4,"275mhz":19,"280mhz":13,"295mhz":[5,8],"300mhz":[11,12,14],"32bit":33,"32k":[12,14],"3rd":11,"45x":19,"49x":13,"512bit":33,"53x":19,"56x":15,"571x":16,"600ghz":[4,5,8,13,15,16,17,19,20],"60ghz":18,"61x":15,"62x":15,"64m":17,"663x":16,"6mhz":14,"723x":16,"772x":16,"7mhz":14,"837x":16,"858x":16,"85x":15,"896x":16,"8mhz":12,"96x":13,"976x":16,"98x":13,"boolean":[4,5,8],"byte":33,"case":[6,27,33],"char":[24,66],"class":[24,25,27,43,65],"const":[16,17,33],"default":[4,5,8,16,33],"dynamic librari":23,"enum":2,"export":27,"final":11,"float":[2,4,5,8,22,24,33,34,36,65],"function":[2,6,8,11,18,29],"getting start":23,"graph l3":[26,29],"graph librari":26,"import":[16,17],"int":[2,4,22,24,31,33,34,39,43,48,49,65,66],"libgraphl3.so":23,"new":[14,18,24,39],"return":[4,5,8,11,13,15,16,17,18,19,22,33,65],"running flow":24,"static":[29,35,37,45],"switch":33,"true":[2,19],"void":[2,33,39,48],"while":[11,13,16,17,18,19,33],And:[11,13,18,19,33],BFS:[11,13,19,33],For:[5,15,16,20],IDs:[18,22,65,66],ISE:28,LTS:[23,28,29],One:4,The:[4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,22,24,26,30,33,65],There:[4,11,18],These:[23,24],With:[16,28],_burstlenr:39,_burstlenw:39,_chnm:39,_columnnm:[39,49],_hashmod:39,_keynm:39,_paynm:39,_wbuffer:39,_wcnt:39,_whash:39,_whashhigh:39,_whashlow:39,_width:[39,49],_wkei:39,_wpai:39,about:15,abov:[5,8],abs:15,acceler:[12,14,16,27],accord:20,accordingli:11,account:15,accrod:18,accumul:4,achiev:[24,66],acquir:26,add:[16,17,29],adder:[16,17,33],adding:[16,17],addit:[13,26],addop:24,addrramtyp:[31,43],addrwidth:[31,43],advantag:[6,15],advic:16,after:[5,16,23],aggreg:[15,39],aggregate_num:39,agre:28,ajust:[7,12,14],algorithm:[4,5,8,22,27,30,33,65],aligned_alloc:24,all:[4,11,13,15,18,19,20,22,24,28,65],allign:4,alloc:33,almost:4,alogrithm:19,alpha:[16,17,22,24,33,65],alreadi:[11,18],also:[2,6,11,14],alveo:[4,5,8,11,13,23,28,29],among:15,amount:15,analysi:[27,30],analyt:29,angl:6,ani:[13,26,28],anoth:19,ap_int:2,ap_uint:[2,33,34,35,36,37,39,45,49],apach:28,apart:6,api:[5,6,7,13,17,19,22,24,26,27,29,65],appli:33,applic:[23,27,28],arbitrari:19,architectur:[7,12,14,16,17],aren:19,arethmat:4,arrai:[7,14,18,33],arrang:15,artix:28,arxiv:15,ascend:[2,48],associ:18,assum:20,assumpt:[16,17],asynchron:[26,27],auto:24,automat:26,avail:[23,26],avoid:24,axi:[5,8,19],backward:[19,33],bandwidth:[17,33],base:[7,11,13,17,18,19,22,33,39,65],bash:23,basi:28,basic:27,becaus:6,been:[11,13,19,24,29],befor:[11,13,19],beforehand:15,begin:[13,14,33],bellman:18,below:[4,5,7,8,11,12,13,14,15,16,17,18,19,20],benchmard:19,benchmark:6,best:[16,17,33],better:[5,7,12,14,19],between:[6,17,27,30],bfs:[9,25,27,32,34],bfs_kernel:11,binari:33,bit:[4,33],block:[11,18],board:[4,5,8,11,13,17,26,33,66],bool:[2,22,24,35,37,39,45,48,65],boost:29,both:[2,4,5,6,13],bram:[4,5,7,8,11,12,13,14,15,16,17,19,20,33],brand:28,bread:11,breadth:[10,13,21,27,30,62],breath:[22,33,65],broken:15,budl:33,buffer:[12,16,17,19,22,24,33,39,65],buffp:33,buffping0:33,buffping1:33,buffpong0:33,buffpong1:33,buffpong:33,build:[27,29],build_so:23,built:[19,23],bundl:33,c_str:24,cach:[15,33,43],cachedepth:33,calc_degre:[32,33,34],calcdepth:12,calconverg:[16,17],calcudegre:[9,27],calcudgre:[10,27],calcul:[4,5,7,12,14,16,17,18,20,27,30,33,39],calcuweighteddegre:[9,27],caldudegre:33,call:[13,14,26],can:[2,4,5,7,8,12,14,15,16,17,18,19,20,24,26,27,29,66],cannot:[12,14],card:[19,22,65],care:6,cdot:15,cento:[23,28],central:[27,30],chang:[4,5,8,12,14],channel:[2,33,39],channel_num:33,channelnum:33,check:11,children:11,chnm:2,chosen:15,cit:[5,8,13,15,16,19,20],clean:29,clock:[7,12,14],cloud:26,cnt:7,cnt_bfr:11,cnt_cur:11,cnt_lvl:11,cnt_nxt:11,cntvalful:33,cntvalfull0:33,cntvalfull1:33,code:[11,13,16,18,26,29],collect:11,colnum:2,color512:33,color:[19,33],colorcsc32:33,colorcsc512:33,colorcsr032:33,colorcsr0512:33,column:[12,14,15,16,17,20,33],column_addr0:37,column_addr1:37,column_addr:[35,45],column_data:39,column_reg0:37,column_reg1:37,column_reg:[35,45],column_valid0:37,column_valid1:37,column_valid:[35,45],common:[19,20],commonli:6,commun:[15,20,27,30],compact:2,compani:[16,17],compar:[4,12,14],comparison:17,complet:[23,26,29],complex:15,complianc:28,compon:[10,21,22,27,30,33,62,65],component32:33,component512:33,compress:[5,8,11,12,13,14,15,16,17,18,19,20],comput:[2,4,13,19,22,26,29,33,39,65,66],condit:[12,14,16,17,20,28],config:[2,4,5,8,33],connect:[10,21,22,27,30,33,62,65],connected_compon:[32,33,34],connectedcompon:[9,13,22,27,65],connnect:[22,33,65],consid:26,constant:[16,17],consumpt:4,contain:[2,4,5,8,13,19,22,33,65],control:[2,4,5,8],converg:[16,17,22,33,65],convert:[10,15,21,22,27,30,33,62,65],convert_csr_csc:[15,32,33,34],convertcsrcsc:[9,25,27],coo:5,copapercites:[5,8],copaperdblp:[5,8],copaperscites:[13,15,16,20],copapersdblp:[13,15,16,20],copi:[20,28],copyright:28,core:[4,5,8,13,15,16,17,19,20],correspond:[2,4,5,8,20,22,29,65],cosin:[2,4,5,8,21,22,62,65],cosinesimilarityapdens:25,cosinesimilarityapspars:25,cosinesimilarityssdens:25,cosinesimilarityssdensemulticard:25,cosinesimilarityssspars:25,could:[6,16,17,20],count:[10,16,17,21,22,27,30,33,62,65],countri:28,cover:27,cpu:[17,18],csc:[10,12,13,15,16,17,20,21,22,27,30,33,62,65],csr2csc:[13,19,33],csr:[5,8,10,11,12,13,15,18,19,20,21,22,24,27,30,33,62,65],cstring:24,cumul:20,cur_bfr:11,current:[16,17,18,26,27],dada:33,damp:[16,17,22,33,65],dangl:5,data:[2,5,7,8,11,12,14,16,17,24,29,33,39,49],data_typ:2,databas:[16,29],dataflow:19,dataload:5,dataonelin:[31,43],dataramtyp:[31,43],dataset:[4,5,8,13,15,16,19,20],datatyp:[2,3,4,5,8],date:33,ddr:[12,14,15,16,17,33,39],debug:[29,33],decid:18,defin:[6,24,27,29,66],degre:[12,14,16,17,27,30,33],degreecsr:33,delet:24,dens:[2,6,10,21,22,27,62,65],dense_similar:2,dense_similarity_int:2,densesimilar:[0,27],densesimilaritykernel:4,depend:23,deploi:[24,26],deploy:[24,26],depth:[11,15,16,33],descend:2,desend:7,design:[6,7,27,28,29,33],desns:5,destin:20,detail:[4,5,8,13,15,19],detect:[6,20,27,30],determin:[16,17,20],develop:[17,26],devic:[24,27],deviceid:66,deviceneed:[24,66],deviceneeded2:24,devicenm:[22,65],devtoolset:28,diagram:[4,5,8,13],differ:[6,12,14,16,17,24],dinstrm:2,direct:[8,11,13,16,17,18,19,20,22,33,65],directli:8,disadvantag:15,discov:11,discoveri:[11,33],distanc:[6,11,18,22,33,65],distance32:33,distance512:33,distribut:[28,29],divid:[4,6],document:[6,27],doubl:[4,33,34,36],doutstrm:2,download:29,drop:16,dsp:[4,5,7,8,11,12,13,14,15,16,17,19,20],dst:20,dtime:[11,33],due:[7,12,14,16,17,20,33],duplic:[12,13,14,16,17,20],dure:[18,33],dynam:27,each:[2,4,5,6,7,8,11,12,13,14,15,16,17,18,19,20,22,24,29,33,65],ealier:11,easi:[7,12,14,26],easili:[26,29],edg:[4,5,8,11,12,13,14,15,16,17,18,19,20,33],edgenum:33,edit:17,either:28,element:7,els:[7,15],empti:[6,11,13,18,19],en_float_point:2,enabl:[27,28],end1strm:48,end2strm:48,end:[2,11,13,14,18,19,33],endinstrm:2,endoutstrm:2,engin:[16,17],ensur:[7,12,14,16,17,20],enter:13,env:29,eout_strm:39,equal:[6,16,17,19,33],equip:[13,18],estim:[16,17],etc:26,euclidean:6,europe_osm:[5,8,15,16,20],ev1:24,ev2:24,ev3:24,ev4:24,ev5:24,even:6,event:[22,65],everi:[8,11,15,18,19],evolv:27,exactli:6,exampl:[20,26,27],exce:33,except:[13,28],execut:[11,15,16,17,20,27],explor:11,express:[28,29],extra:13,f_cast:[34,36],factor:[16,17,22,33,65],far:6,field:[49,51,52,53,54,56,57,58,59,60,61,66],figur:[7,11,12,14,15,16,17,18,19,20],file:[6,27,28,66],find:[8,15,18,19,20],findnewroot:[13,19],finish:[11,29,33],finnal:5,first:[10,12,13,16,17,18,19,20,21,22,27,30,33,62,65],firstli:14,fix:33,flag:[2,22,33,65],flow:27,folder:27,follow:[7,11,12,14,15,16,17,18,19,20,23,27,29],ford:18,form:19,format:[5,8,11,12,13,14,15,16,17,18,19,20,22,27,30,33,65],formula:6,forward:33,four:5,fpga:[12,14,17,21,22,23,26,29,62,65,66],frac:[16,17],framework:[24,26],free:24,freebuff:24,frequenc:[4,5,7,8,12,13,14,15,16,17,20],frist:20,from:[6,11,12,13,14,15,16,17,18,19,20,22,33,39,65],frqeuenci:11,ftime:33,full:27,fulli:24,funciton:[16,17,20],gener:[6,10,14,27],general_similar:2,generalsimilar:[0,27],generalsimilaritykernel:5,geomean:[5,8,13,15,16,19,20],get:[7,12,13,14,15,16,17,20,26,27],get_bit:33,getlabel:15,getvertex:11,give:[22,65],given:[15,19,24,33],global:[35,37,45],gmem:33,googl:[16,17],govern:28,gr1:[22,65],gr2:[22,65],graph:[0,6,8,9,11,12,13,14,15,16,17,18,19,20,23,24,25,26,29,30,32,34,45,63,65],graph_csc:[13,19],graph_csr:[13,19],graphtyp:[2,3,5],greater:[19,20],ground:6,grouprampart:[31,43],grpah_csc:13,gsql:29,guid:27,handl:[22,24,25,65],handle0:24,hardwar:[18,24,26,27,28,66],harwar:24,has:[11,15,20],hash:39,hash_group_aggreg:[32,33,34],hash_max_freq:[39,49],hash_mod:39,hashmaxfreq:15,hashw:39,hasn:19,have:[4,5,6,7,8,13,15,19,24,29],hbm:[17,33,39],here:[11,13,15,18,19,33],herein:28,heterochron:26,high:24,higher:[17,33,66],highest:[15,22,65],hls:[2,39,48],hold:[12,14,16,17,20],hollywood:[5,8,13,15,16,19,20],hop:[11,18],host:[8,16,33],how:[16,17],hpp:[2,21,22,24,31,33,39,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,65,66],http:[15,28],i_e_strm:39,i_hash_strm:39,i_key_strm:39,i_pld_strm:39,illustr:[4,5,8,13],impact:5,implement:[22,24,27,33,65],impli:28,improv:5,in_buf0:39,in_buf:39,inc:[28,29],includ:[2,11,21,22,24,27,28,30,31,33,39,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,65,66],increas:[15,16,20],indegre:[12,13,19,33],independ:19,index0:33,index1:33,index2:[14,33],index:[8,14,18,22,27,33,65],indexcsc32:33,indexcsc512:33,indexcsc:33,indexcsr0:33,indexcsr1:33,indexcsr:33,indexin:33,indexout:33,indic:[2,5,6,8,14,16,17,20,33],indice1:14,indice2:14,indicecsr:2,indxecsc512:33,infin:[11,18],infinit:6,influenc:[12,14],info:33,inform:[15,24,33,66],inherit:28,initi:[15,16,17,33],initia:39,inner:6,innov:26,input:[2,4,5,7,8,11,12,13,14,16,17,18,19,20,22,33,65],insert:[4,5,7,8,39],insert_sort:7,instal:[27,29],instanc:24,instanti:24,insuffici:[16,17,20],int32:4,int32_t:[22,65],int64:4,integ:4,integr:[26,27],intel:[4,5,8,13,15,16,17,18,19,20],interfac:6,intermedi:[20,33],intern:[2,6,7,27,32,33,45],internum:48,intersect:[6,20,48],isresultinpong:33,iter:[11,16,17,18,19,22,33,65],iternum:15,its:[2,4,5,11,15,19,20],jaccard:[2,4,5,8,21,22,62,65],jaccardsimilarityapdens:25,jaccardsimilarityapspars:25,jaccardsimilarityssdens:25,jaccardsimilarityssspars:25,join:24,judeg:6,keep:[12,16,17,33],kei:[2,7,39],kernel:[4,5,8,11,12,13,14,15,16,17,19,20,26,27,28,66],kernel_pagerank_0:[12,14,16,17],kernelalia:66,kernelnam:[24,66],kernelname2:24,key_column:39,key_typ:2,key_uram:39,keynm:39,keyw:39,kind:28,kinstrm:2,kintex:28,knnsimilar:[22,65],knnsimilarinyapspars:25,knnsimilarityapdens:25,knnsimilarityssdens:25,knnsimilarityssspars:25,known:[4,5,15,16,17],knownlabel:[22,65],kout_strm:39,koutstrm:2,label:[10,13,19,21,22,27,30,33,62,65],label_propag:[32,33,34],labelp:33,labelpong:33,labelpropag:[9,25,27],labelselect:15,languag:[28,29],larg:[15,33],last:19,later:28,law:28,layer:26,leak:24,left:15,len:33,length:[6,22,24,33,65],let:15,level:[11,17,27],lib:23,libgraphl3:23,librari:[4,21,22,28,29,62,65],licens:27,like:[16,17],limit:[12,14,28,33],line:33,link:[16,17,23],list:[4,5,7,8,11,12,13,14,15,16,17,18,19,20],livejournal1:[5,8,13,15,16,19,20],ljournal:[5,8,13,15,16,19,20],load:[5,11,18,24],loadcol:18,loadgraph:24,loadoffset:18,loadr:18,log2:33,log2cachedepth:33,log2datapercachelin:33,log2datapercachelinecor:33,log2datapercachelinedegre:33,log2unrol:33,log:2,logic:[4,5],logo:28,loop:4,lot:16,lower:[33,66],lowest:[13,19,22,33,65],lp_kernel:15,lut:[4,5,7,8,11,12,13,14,15,16,17,19,20],lutram:[12,14,33],mai:[16,28],mainli:6,major:[12,14],make:[16,17,29],makefil:27,manag:[21,23,26,29,62],mani:[15,24],manual:16,map:33,master:19,match:8,mathemat:19,matrix:[12,14,16,17,20,21,22,33,62,65],max:[2,17,22,33,65],max_count:39,max_kei:39,max_rng:39,max_sort_numb:2,maxedg:33,maximum:[4,5,8,15,33,66],maxit:[22,24,65],maxoutdegre:33,maxsiz:33,maxvertex:33,mean:33,measur:[6,16,17],meet:20,member:[22,65],membership:[22,33,65],memori:[16,17,20,24,33],merg:[13,39],mergeimpl:20,mergesort:13,met:23,method:24,mhz:[7,12,14,15,16,17,20],minimum:7,mode:[5,24],model:24,modul:[4,5,8,11,12,13,14,15,16,17,20,27,28,33],more:[15,16,17,19,33],most:[4,5,22,65],mostli:13,move:11,mssp:[32,33,34],mtype:[34,36],much:[7,12,14],mulplier:33,multi:[22,24,65],multipl:[2,15,19,39],multiplif:[16,17],must:[6,19,20],muti:2,name:[4,5,8,11,13,19,26,66],namespac:[0,9,25,27],nearest:[22,65],need:[15,16,26,27,29,66],neighbor:[11,15,20,22,65],network:15,newroot:13,newrootnod:19,next:[11,18],node:[12,13,14,15,16,17,20],non:6,nopr:[32,33,34,45],norm:[16,17],normal:[6,16,17,22,33,65],note:[16,18,20,27],notic:27,now:[22,27,65],nsourc:[22,24,33,65],nsource1:24,nsource2:24,nsource3:24,nsource4:24,ntriangl:[22,65],number:[2,4,5,7,8,15,16,17,19,20,22,26,33,48,65,66],numedg:[24,33],numedgeperchannel:33,numedges2:24,numit:33,numvertex:33,numvertic:24,numvertices2:24,o_e0_strm:39,o_e1_strm:39,o_e_strm:39,o_hash_strm:39,o_key_strm:39,o_max_end_strm:39,o_max_key_strm:39,o_pld_strm:39,object:6,obtain:[16,17,19,20,28],obvious:16,occup:66,occupi:66,occur:15,offer:[27,29],offset0:33,offset1:[14,33],offset2:[14,33],offset:[2,5,8,14,18,33],offset_addr:45,offset_reg:45,offset_valid:45,offsetcsc:33,offsetcsctmp1:33,offsetcsctmp2:33,offsetcsr0:33,offsetcsr1:33,offsetcsr:[2,33],offsetin:33,offsetout:33,offsettmp0:33,offsettmp1:33,onc:[29,39],onchip:33,one:[7,11,12,13,14,17,19,22,33,39,65],onli:[2,4,7,11,12,14,16,17,20,22,33,65],op0:24,op1:24,op_typ:39,opbf:[21,62],opconvertcsrcsc:[21,62],open:27,opencl:26,openxrm:[21,62],oper:[13,21,28,62,66],operationnam:[24,66],oplabelpropag:[21,62],oplprop:[21,62],opnam:24,opname2:24,oppagerank:[21,62],oppg:[21,24,62],opscc:[21,62],opsimdens:[21,62],opsimilaritydens:[21,62],opsimilarityspars:[21,62],opsimspars:[21,62],opsp:[21,24,62],opt:[23,27],optcount:[21,62],optim:17,option:33,optrianglecount:[21,62],opwcc:[21,62],order:[2,15,16,17,20,23,24,29,33,48],orderunrol:33,org:[15,28],orient:20,origin:[26,33],other:[4,6,8,13,15,16,17,18,19,20,28],otherwis:[2,27],ouput:[22,65],our:[7,12,14,33],out:[8,11,13,16,17,18,22,33,65],out_buf0:39,out_buf:39,outdegre:[12,13,16,17,19,33],output:[2,4,13,15,22,33,65],overal:[4,5,8,13],overflow:[33,39],overview:27,own:[19,29],owner:28,packag:29,page:[16,17,27,30],pagerank:[10,17,21,22,24,27,32,33,34,62,65],pagerank_cach:[16,17],pagerank_multi_channel:[31,33],pagerank_person:33,pagerankcor:33,pagerankmultichannel:[10,27,32,33,34],pageranktop:[9,27],pagerankweight:[24,25],pair:[7,22,65],parallel:29,param:33,paramet:[2,15,22,33,65,66],parent:[11,22,33,65],parti:16,partit:[5,8,19],pass:[11,18,20],patent:[5,8,13,15,16,19,20],path:[10,13,21,22,27,30,33,62,65,66],path_graph_lib:29,path_xrt:29,pathfind:[27,30],patient:[4,5],pattern:27,paynm:39,per:[7,12,13,14,15,16,19,20],percent:66,perform:[7,8,12,14,15,18,19,20],permiss:28,person:33,persudo:33,pictur:[5,8],ping:33,pinghashbuf:33,pingpong:33,pipelin:66,platform:[4,5,8,11,13,15,16,17,18,19,20,26,27,29],platform_repo_path:27,pld:[7,39],pld_column:39,pld_uram0:39,pleas:[15,23,29,33],plugin:[27,29],point:[16,17,23,33],pong:33,pong_buf:39,ponghashbuf:33,pop:[11,13,18,19],port:[5,8,33],posit:[11,18],pout_strm:39,pr_new:[16,17],pr_old:[16,17],pre:27,precess:33,pred1:24,pred2:24,pred32:33,pred3:24,pred4:24,pred512:33,pred:[24,32,33,34,45],predec:[22,65],predecessor:33,predict:[22,65],prefix:29,present:11,previou:[15,20],primit:[1,2,4,5,27],priori:15,problem:18,procedur:[11,13,18,19],process:[2,5,11,19,39],produc:15,product:6,profil:6,propag:[10,21,22,27,30,33,62,65],proper:23,properti:[28,29],proport:15,provid:[4,6,23,24,26,27,30],pseduo:13,pseudo:[11,18],pseudocod:[16,17],pu0:2,pu1:2,pu2:2,pu3:2,pure:26,push:[11,13,18,19],put:33,qualiti:[16,17],que_addr:[35,37,45],que_reg:[35,37,45],que_valid:[35,37,45],quectrl:18,queue32:33,queue512:33,queue:[11,13,18,19,33],queuecsc:33,queuecsr0:33,queuecsr1:33,quit:[7,12,14],ram_sz:2,ramrow:[31,43],ramtyp:33,random:15,randomli:15,randomprob:33,rang:30,rank:[16,17,22,27,30,65],ratio:16,reachabl:19,read:39,readcolor:11,readgraph:11,readin:24,readr:13,real:[6,15,29],rebuild:[4,5,8],receiv:[16,17,24],rectangular:6,recycl:24,reduc:15,refer:[4,8],region:19,regist:[4,5,8],rel:4,relat:[24,26],relationship:20,releas:[24,27,29],remov:13,report:7,repres:[16,17,24,66],requestload2:24,requestload:[24,66],requir:[7,13,15,19,24,27,33],resourc:[18,21,23,24,26,29,62,66],respect:28,respons:[11,18],result1:24,result2:24,result3:24,result4:24,result:[2,4,5,6,8,11,13,16,17,18,19,20,22,24,33,39,65],result_addr:[35,37,45],result_reg:[35,37,45],result_valid:[35,37,45],resultid:[22,65],resultinfo:33,ret1:24,ret2:24,ret3:24,ret4:24,ret5:24,ret:24,rhel:[23,28],right:15,root:13,rootnod:19,rough:[16,17],round:39,row1copyimpl:20,row2impl:20,row:[5,8,11,12,13,14,15,18,19,20,33],rowid:2,rownum:2,run:[4,5,8,13,15,16,17,18,19,20,26,27],runprecanonic:20,runtim:[16,17,23,29],runtime_src:29,rununtilconverg:16,said:19,same:[6,7,13,16,19,24,33],sampl:6,scalabl:17,scale:29,scc:[19,25,32,33,34],scc_kernel:19,schedul:24,script:[23,27,29],search:[8,10,13,16,17,21,22,27,30,33,62,65],second:[15,16,17,20],see:[12,14,15,16,17,20,28],select:[15,23],self:[16,17,20],seper:[24,26],sequenc:2,seri:[24,26],set:[4,5,6,15,20,23,27],setkernelnam:24,settings64:27,setup:[24,27,66],sever:[4,5,8,14],share:[5,19,23,33],shell:[23,29],shortest:[10,21,22,27,30,33,62,65],shortest_path:[33,55,56,57,58,59,60,61],shortestpath:[24,25],shortestpathfloat:24,shoud:33,should:[2,4,5,7,8,11,12,13,14,16,17,18,19,20,23,24,28,33],show:[11,18,33],shown:[4,5,7,8,11,12,13,14,15,16,17,18,19,20],side:8,significantli:5,similar:[1,2,10,21,22,27,62,65],similaritytyp:[2,3,4,5,8],simpl:7,simpler:4,simplifi:29,singl:[10,13,19,22,27,30,33,65,66],singleop:[21,24,62],singlesourceshortestpath:[9,18,27],size:[2,4,5,6],sizeof:33,skitter:[5,8,13,15,16,20],slightli:16,small:15,smaller:6,soc:[5,8,13,15,16,19,20],socket:[13,15,16,19,20],softwar:[26,27],sofwar:23,solut:15,some:[16,19,29],sometim:13,sort:[1,2,4,5,8,13,27],sort_top_k:2,sorttopk:[0,27],sourc:[2,10,11,22,23,27,29,30,33,65],sourceid1:24,sourceid2:24,sourceid3:24,sourceid5:24,sourceid:[22,24,33,65],sourceindic:[2,22,65],sourcenum:[2,22,65],sourceweight:[2,22,65],space:6,spark:[15,20],spars:[2,4,6,10,11,12,13,14,15,16,17,18,19,20,21,22,27,62,65],sparse_similar:2,sparsesimilar:[0,27],sparsesimilaritykernel:8,spartan:28,specif:[15,28],speed:[4,5,8,13,19],speedup:[15,16,20],src:[20,29],srcid:33,sssp:[32,33,34],stage:11,stamp:33,start:[11,18,19,20,22,26,27,33,65],start_xrmd:23,startid:2,state:28,std:[22,24,65,66],step:[23,24,29],still:[6,16,17],stop:15,store:[5,33],stream:[2,5,7,13,33,39,48],string:[22,24,65],strm_e_in:39,strm_key_in:39,strm_rng_in:39,strm_undo_:39,strm_undo_kei:39,strm_undo_pld:39,strmin0:2,strmin1:2,strmin2:2,strmin3:2,strmoutend:2,strongli:[10,21,22,27,30,33,62,65],strongly_connected_compon:33,stronglyconnectedcompon:[9,19,22,27,65],struct:[21,24,39,62],structur:[11,15],sub:19,subgraph:[13,19],suffici:24,sum:[17,33],supergraph:13,support:[2,4,5,22,24,28,29,33,65],synchron:[15,26],system:[11,18,28],tabl:18,take:[4,33],taken:6,tc_kernel:20,tcaccunit:20,tell:33,temp:33,templat:[2,4,5,8,33,34,36,39,43,48],temporari:33,tend:15,test:16,testcas:29,text:6,than:[4,20],thei:[6,12,14,24,29],theirs:[22,65],them:[6,11,12,16,17,29],themselv:19,theori:[6,13,19],therefor:28,thi:[5,11,13,16,17,18,19,22,23,26,27,28,33,65],thing:26,third:16,those:19,thread:[4,5,8,13,15,16,17,19,20,24],three:20,through:20,throughput:[24,66],ties:15,tigergraph:[16,17,18,27],time:[4,5,8,13,15,16,17,19,20,24,29,33],tmp:7,toler:[16,17,22,24,33,65],tool:[16,19,23,29],top:[1,2,4,5,8,27],top_k_sort:7,topk:[22,65],total:[11,13,15,16,19,20],trademark:27,transfer:[14,16,17,33],transform:[4,5,14],travers:[11,13,22,33,65],treat:[22,65],triangl:[10,21,22,27,30,33,62,65],triangle_count:[32,33,34],trianglecount:[9,20,25,27],truth:6,twice:4,two:[4,5,6,8,13,19,20],type:[2,4,5,8,22,33,65],typenam:[2,31,33,34,36,43,48],u200:28,u250:[11,13,19,28],u50:[4,5,8,23,29],ubuntu:[23,28,29],uint32:4,uint32_t:[22,24,53,54,59,61,65],uint64:4,uint64_t:[22,33,51,52,57,60,65],uint:[4,5,8],under:28,underli:[16,17],undirect:[5,8,13,20,22,33,65],undokey_strm:39,undopld_strm:39,unhandle_cnt:39,unhandle_cnt_r:39,unhandle_cnt_w:39,uniformli:15,union:[6,34,36],uniqu:15,unit:[2,4,5,8,13,15,16,17,19,20,26,28,39,66],unless:28,unrol:33,unrollbin:33,unsign:[34,39,66],until:[11,18],unweight:[16,22,33,65],updat:[11,15,18,39],uram:[2,4,5,7,8,11,12,13,14,15,16,17,19,20,33,39],uramrow:33,usag:33,use:[7,12,14,16,17,19,20,23,24,27,28,33],used:[6,7,12,14,16,17,18,20,22,26,33,65],user:[16,23,27,29],using:[4,14,19,26,27,28,66],util:[4,5,7,8,11,12,13,14,15,16,17,18,19,20],valid:[4,5,8,11,13],validramtyp:[31,43],valu:[2,4,5,6,8,11,13,16,17,18,19,22,33,39,65],value1strm:48,value2strm:48,variabl:[4,23,27,35,37,45],varieti:27,variou:24,vector:[6,17,66],version:[4,16,17,23,28,29],vertex:[2,4,5,8,11,12,13,15,16,17,18,19,20,22,33,65],vertexnum:33,vertic:[6,11,13,18,22,33,65],via:[27,28],virtex:28,viti:28,vitis_graph:17,vitis_librari:23,vivado:19,wai:[16,17],wait:24,warranti:28,wcc:25,wcc_kernel:13,wdata:2,weakli:[13,21,62],web:[16,17,29],websit:[16,17],weekli:[27,30],wei:18,weight:[2,5,8,16,17,18,22,24,33,65],weight_addr:45,weight_reg:45,weight_valid:45,weightcsc:33,weightcsr:33,weighted1:24,weighted2:24,weighted3:24,weighted4:24,when:[11,13,15,20,22,33,65],where:20,whether:[6,11,18],which:[2,4,5,6,7,8,11,13,18,19,33,66],whose:[19,20],wide:6,width:[2,33],widthor:33,wikipedia:[6,13,15,19],within:15,without:[26,28],word:19,work:[16,28],write:[28,39],writer:[11,18],written:[27,29],www:28,xclbin:[4,5,8,66],xclbinfil:[24,66],xclbinpath2:24,xclbinpath:24,xeon:[4,5,8,13,15,16,17,18,19,20],xf_graph:23,xf_graph_l3:[22,24,65],xf_graph_l3_handl:[21,62,66],xilinx:[21,23,26,27,28,29,62],xilinx_xrm:23,xilinx_xrt:23,xpfm:27,xrm:[21,23,26,29,62],xrt:[23,26,27,28,29],xrt_boost_instal:29,xrtdep:29,you:28,zero:6,zynq:28},titles:["API Document","Design Internals","namespace graph","namespace enums","Internal Design of Dense Similarity","Internal Design of General Similarity","Similarity Primitives","Top K Sort","Internal Design of Sparse Similarity","API Document","Design Internals","Internal Design of Breadth-first Search","Internal Design of CalcuDgree","Internal Design of Connected Component","Internal Design of Convert CSC CSR","Internal Design of Label Propagation","Internal Design of PageRank","Internal Design of PageRankMultiChannels","Internal Design of Single Source Shortest Path","Internal Design of Strongly Connected Component","Internal Design of Triangle Counting","L3 class","namespace xf::graph::L3","Getting Started","Running Examples","API Document","User Guide","Vitis Graph Library","Requirements","TigerGraph Integration","Release Note","template class xf::graph::internal::pagerankMultiChannel::cache","namespace xf","namespace graph","namespace internal","namespace bfs","namespace calc_degree","namespace connected_components","namespace convert_csr_csc","namespace hash_group_aggregate","namespace label_propagation","namespace mssp","namespace pagerank","namespace pagerankMultiChannel","namespace scc","namespace sssp","namespace nopred","namespace pred","namespace triangle_count","template struct xf::graph::internal::hash_group_aggregate::COLUMN_DATA","template union xf::graph::internal::calc_degree::f_cast","template union xf::graph::internal::calc_degree::f_cast &lt;double&gt;","template union xf::graph::internal::calc_degree::f_cast &lt;ap_uint &lt;64&gt;&gt;","template union xf::graph::internal::calc_degree::f_cast &lt;ap_uint &lt;32&gt;&gt;","template union xf::graph::internal::calc_degree::f_cast &lt;float&gt;","template union xf::graph::internal::f_cast","template union xf::graph::internal::f_cast &lt;unsigned int&gt;","template union xf::graph::internal::f_cast &lt;double&gt;","template union xf::graph::internal::f_cast &lt;int&gt;","template union xf::graph::internal::f_cast &lt;ap_uint &lt;32&gt;&gt;","template union xf::graph::internal::f_cast &lt;ap_uint &lt;64&gt;&gt;","template union xf::graph::internal::f_cast &lt;float&gt;","class xf::graph::L3::Handle","namespace xf","namespace graph","namespace L3","struct xf::graph::L3::Handle::singleOP"],titleterms:{"32k":16,"512bit":16,"class":[21,31,62],"enum":3,"float":[54,61],"int":[56,58],acceler:28,algorithm:[6,7,11,12,13,14,15,16,17,18,19,20],alveo:16,ap_uint:[52,53,59,60],api:[0,9,25],asynchron:24,basic:24,benchmark:[4,5,8,13,15,19,20],between:[4,5,8,13,15,16,19,20],bfs:[22,33,35,65],breadth:11,buf_to_stream:39,build:23,cach:[12,14,16,31],calc_degre:[36,50,51,52,53,54],calcudegre:[12,33],calcudgre:12,calcuweighteddegre:33,card:28,channel:17,column_data:49,comparison:[4,5,8,13,15,16,19,20],compon:[13,19],connect:[13,19],connected_compon:37,connectedcompon:33,convert:14,convert_csr_csc:38,convertcsccsr:14,convertcsrcsc:[22,33,65],cosin:6,cosinesimilarityapdens:[22,65],cosinesimilarityapspars:[22,65],cosinesimilarityssdens:[22,65],cosinesimilarityssdensemulticard:[22,65],cosinesimilarityssspars:[22,65],count:20,cpu:[4,5,8,13,15,16,19,20],csc:14,csr:14,dens:[4,5],densesimilar:2,depth:[12,14],design:[1,4,5,8,10,11,12,13,14,15,16,17,18,19,20],document:[0,9,25],doubl:[51,57],dynam:23,environ:[23,27],exampl:24,execut:24,f_cast:[50,51,52,53,54,55,56,57,58,59,60,61],field:[21,62],first:11,flow:[24,29],fpga:[4,5,8,13,15,16,19,20],gener:5,generalsimilar:2,get:23,graph:[2,4,5,21,22,27,31,33,49,50,51,52,53,54,55,56,57,58,59,60,61,62,64,66],guid:26,handl:[21,62,66],hardwar:[4,5,7,8,11,12,13,14,15,16,17,19,20,23,29],hash_aggr_pu_wrapp:39,hash_aggr_top:39,hash_group_aggreg:[39,49],hash_wrapp:39,implement:[4,5,6,7,8,11,12,13,14,15,16,17,18,19,20],indic:27,initial_uram:39,integr:29,interfac:[4,5,8,11,13,18,19],intern:[1,4,5,8,10,11,12,13,14,15,16,17,18,19,20,31,34,49,50,51,52,53,54,55,56,57,58,59,60,61],iter:15,jaccard:6,jaccardsimilarityapdens:[22,65],jaccardsimilarityapspars:[22,65],jaccardsimilarityssdens:[22,65],jaccardsimilarityssspars:[22,65],knnsimilarinyapspars:[22,65],knnsimilarityapdens:[22,65],knnsimilarityssdens:[22,65],knnsimilarityssspars:[22,65],label:15,label_propag:40,labelpropag:[22,33,65],librari:[23,27],licens:28,maximum:[7,16],merge1_1:39,mssp:41,multipl:24,namespac:[2,3,22,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,63,64,65],nopr:46,note:30,notic:28,one:16,orderstrminternum:48,overload:33,overview:[6,7,11,12,13,14,15,16,17,18,19,20,21,62,66],pagerank:[16,42],pagerankmultichannel:[17,31,43],pageranktop:33,pagerankweight:[22,65],path:18,pcie:28,perform:[4,5],platform:28,pred:47,primit:6,profil:[4,5,7,8,11,12,13,14,15,16,17,18,19,20],propag:15,releas:30,request:24,requir:[23,28,29],resourc:[4,5,7,8,11,12,13,14,15,16,17,19,20],run:[24,29],scc:[22,44,65],search:11,setup:23,shell:27,shortest:18,shortestpath:[22,65],similar:[4,5,6,8],singl:18,singleop:66,singlesourceshortestpath:33,size:16,slr:16,small:16,softwar:[23,28,29],sort:7,sortnum:7,sorttopk:2,sourc:18,spark:[13,16,19],spars:[5,8],sparsesimilar:2,sssp:45,start:23,stream_to_buf:39,strongli:19,stronglyconnectedcompon:33,struct:[49,66],support:16,tabl:[4,5,7,8,11,12,13,14,15,16,17,19,20,27],templat:[31,49,50,51,52,53,54,55,56,57,58,59,60,61],tigergraph:[4,5,8,29],top:7,trademark:28,triangl:20,triangle_count:48,trianglecount:[22,33,65],u250:16,union:[50,51,52,53,54,55,56,57,58,59,60,61],unsign:56,update_key_uram:39,update_pld_uram:39,update_uram:39,user:26,using:24,viti:27,vitis_graph:16,wcc:[22,65],work:17}})