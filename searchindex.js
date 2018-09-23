Search.setIndex({docnames:["README","api/modules","api/salad","api/salad.datasets","api/salad.datasets.da","api/salad.datasets.digits","api/salad.datasets.transforms","api/salad.datasets.visda","api/salad.layers","api/salad.models","api/salad.models.audio","api/salad.models.digits","api/salad.models.vision","api/salad.solver","api/salad.solver.da","api/salad.utils","benchmarks","dummy","index","reading","readinglist_gen","whitepaper"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["README.rst","api/modules.rst","api/salad.rst","api/salad.datasets.rst","api/salad.datasets.da.rst","api/salad.datasets.digits.rst","api/salad.datasets.transforms.rst","api/salad.datasets.visda.rst","api/salad.layers.rst","api/salad.models.rst","api/salad.models.audio.rst","api/salad.models.digits.rst","api/salad.models.vision.rst","api/salad.solver.rst","api/salad.solver.da.rst","api/salad.utils.rst","benchmarks.rst","dummy.rst","index.rst","reading.rst","readinglist_gen.rst","whitepaper.rst"],objects:{"":{salad:[2,0,0,"-"]},"salad.datasets":{da:[4,0,0,"-"],digits:[5,0,0,"-"],transforms:[6,0,0,"-"],visda:[7,0,0,"-"]},"salad.datasets.da":{base:[4,0,0,"-"],digits:[4,0,0,"-"],toy:[4,0,0,"-"]},"salad.datasets.da.base":{AugmentationDataset:[4,1,1,""],JointDataset:[4,1,1,""],JointLoader:[4,1,1,""],MultiDomainLoader:[4,1,1,""],concat_collate:[4,2,1,""],load_dataset2:[4,2,1,""],load_dataset:[4,2,1,""]},"salad.datasets.da.digits":{AugmentationLoader:[4,1,1,""],ColorConstancyDataset:[4,1,1,""],DigitsLoader:[4,1,1,""],HighToLowGaussian:[4,1,1,""],HighToLowSaltPepper:[4,1,1,""],LowToHighGaussian:[4,1,1,""],LowToHighSaltPepper:[4,1,1,""],RotationLoader:[4,1,1,""],init_func:[4,2,1,""]},"salad.datasets.da.digits.HighToLowGaussian":{noisemodels:[4,3,1,""]},"salad.datasets.da.digits.HighToLowSaltPepper":{noisemodels:[4,3,1,""]},"salad.datasets.da.digits.LowToHighGaussian":{noisemodels:[4,3,1,""]},"salad.datasets.da.digits.LowToHighSaltPepper":{noisemodels:[4,3,1,""]},"salad.datasets.da.digits.RotationLoader":{eps:[4,3,1,""]},"salad.datasets.da.toy":{ToyDatasetLoader:[4,1,1,""],make_data:[4,2,1,""],noise_augment:[4,2,1,""]},"salad.datasets.digits":{base:[5,0,0,"-"],mnist:[5,0,0,"-"],openset:[5,0,0,"-"],synth:[5,0,0,"-"],usps:[5,0,0,"-"]},"salad.datasets.digits.mnist":{MNIST:[5,1,1,""]},"salad.datasets.digits.openset":{OpenSetDataset:[5,1,1,""],get_data:[5,2,1,""]},"salad.datasets.digits.synth":{Synth:[5,1,1,""],SynthSmall:[5,1,1,""]},"salad.datasets.digits.synth.Synth":{extract_images_labels:[5,4,1,""],image_shape:[5,3,1,""],num_labels:[5,3,1,""],test_file:[5,3,1,""],training_file:[5,3,1,""],urls:[5,3,1,""]},"salad.datasets.digits.synth.SynthSmall":{extract_images_labels:[5,4,1,""],image_shape:[5,3,1,""],num_labels:[5,3,1,""],test_file:[5,3,1,""],training_file:[5,3,1,""],urls:[5,3,1,""]},"salad.datasets.digits.usps":{USPS:[5,1,1,""]},"salad.datasets.digits.usps.USPS":{extract_images_labels:[5,4,1,""],image_shape:[5,3,1,""],num_labels:[5,3,1,""],test_file:[5,3,1,""],training_file:[5,3,1,""],urls:[5,3,1,""]},"salad.datasets.transforms":{digits:[6,0,0,"-"],ensembling:[6,0,0,"-"],noise:[6,0,0,"-"],noisy:[6,0,0,"-"]},"salad.datasets.transforms.ensembling":{ImageAugmentation:[6,1,1,""],cat_nx2x3:[6,2,1,""],centre_xf:[6,2,1,""],identity_xf:[6,2,1,""],inv_nx2x2:[6,2,1,""],inv_nx2x3:[6,2,1,""],rotation_matrices:[6,2,1,""]},"salad.datasets.transforms.ensembling.ImageAugmentation":{augment:[6,4,1,""],augment_pair:[6,4,1,""]},"salad.datasets.transforms.noise":{DomainConfusion:[6,1,1,""],DomainLabel:[6,1,1,""],Gaussian:[6,1,1,""],InvertContrast:[6,1,1,""],SaltAndPepper:[6,1,1,""],Shift:[6,1,1,""],Uniform:[6,1,1,""]},"salad.datasets.transforms.noisy":{clean_transform:[6,2,1,""],load_noisy_mnist:[6,2,1,""],noisy_transform:[6,2,1,""],transform:[6,2,1,""]},"salad.datasets.visda":{detection:[7,0,0,"-"],openset:[7,0,0,"-"],utils:[7,0,0,"-"],visda:[7,0,0,"-"]},"salad.datasets.visda.detection":{CoordShuffle:[7,1,1,""],MaxTransform:[7,1,1,""],VisdaDetectionLoader:[7,1,1,""],build_dataset:[7,2,1,""],build_validation:[7,2,1,""],load_datalist:[7,2,1,""]},"salad.datasets.visda.detection.VisdaDetectionLoader":{id2label:[7,3,1,""]},"salad.datasets.visda.utils":{Augmentation:[7,1,1,""],MultiTransform:[7,1,1,""],get_balanced_loader:[7,2,1,""],get_class_counts:[7,2,1,""],get_unbalanced_loader:[7,2,1,""],visda_data_loader:[7,2,1,""],visda_data_loader_full:[7,2,1,""],visda_data_loader_pseudo:[7,2,1,""]},"salad.datasets.visda.visda":{load_dataset:[7,2,1,""]},"salad.layers":{association:[8,0,0,"-"],base:[8,0,0,"-"],coral:[8,0,0,"-"],da:[8,0,0,"-"],funcs:[8,0,0,"-"],mat:[8,0,0,"-"],vat:[8,0,0,"-"]},"salad.layers.association":{Accuracy:[8,1,1,""],AssociationMatrix:[8,1,1,""],AssociativeLoss:[8,1,1,""],AugmentationLoss:[8,1,1,""],ClassBalanceLoss:[8,1,1,""],OTLoss:[8,1,1,""],VisitLoss:[8,1,1,""],WalkerLoss:[8,1,1,""],WassersteinLoss:[8,1,1,""]},"salad.layers.association.Accuracy":{forward:[8,4,1,""]},"salad.layers.association.AssociationMatrix":{forward:[8,4,1,""]},"salad.layers.association.AssociativeLoss":{forward:[8,4,1,""]},"salad.layers.association.AugmentationLoss":{forward:[8,4,1,""]},"salad.layers.association.ClassBalanceLoss":{forward:[8,4,1,""]},"salad.layers.association.OTLoss":{forward:[8,4,1,""]},"salad.layers.association.VisitLoss":{forward:[8,4,1,""]},"salad.layers.association.WalkerLoss":{forward:[8,4,1,""]},"salad.layers.association.WassersteinLoss":{forward:[8,4,1,""]},"salad.layers.base":{AccuracyScore:[8,1,1,""],KLDivWithLogits:[8,1,1,""],MeanAccuracyScore:[8,1,1,""],WeightedCE:[8,1,1,""]},"salad.layers.base.AccuracyScore":{forward:[8,4,1,""]},"salad.layers.base.KLDivWithLogits":{forward:[8,4,1,""]},"salad.layers.base.MeanAccuracyScore":{forward:[8,4,1,""]},"salad.layers.base.WeightedCE":{forward:[8,4,1,""],robust_binary_crossentropy:[8,4,1,""]},"salad.layers.coral":{AffineInvariantDivergence:[8,1,1,""],CoralLoss:[8,1,1,""],CorrelationDistance:[8,1,1,""],JeffreyDivergence:[8,1,1,""],LogCoralLoss:[8,1,1,""],SteinDivergence:[8,1,1,""]},"salad.layers.coral.CorrelationDistance":{forward:[8,4,1,""]},"salad.layers.coral.LogCoralLoss":{forward:[8,4,1,""]},"salad.layers.da":{AutoAlign2d:[8,1,1,""],FeatureAwareNormalization:[8,1,1,""]},"salad.layers.da.AutoAlign2d":{forward:[8,4,1,""]},"salad.layers.funcs":{concat:[8,2,1,""]},"salad.layers.mat":{affineinvariant:[8,2,1,""],apply:[8,2,1,""],cov:[8,2,1,""],euclid:[8,2,1,""],getdata:[8,2,1,""],jeffrey:[8,2,1,""],logeuclid:[8,2,1,""],riemann:[8,2,1,""],stable_logdet:[8,2,1,""],stein:[8,2,1,""]},"salad.layers.vat":{ConditionalEntropy:[8,1,1,""],VATLoss:[8,1,1,""],normalize_perturbation:[8,2,1,""]},"salad.layers.vat.ConditionalEntropy":{forward:[8,4,1,""]},"salad.layers.vat.VATLoss":{forward:[8,4,1,""]},"salad.models":{audio:[10,0,0,"-"],base:[9,0,0,"-"],digits:[11,0,0,"-"],gan:[9,0,0,"-"],neural:[9,0,0,"-"],resnet:[9,0,0,"-"],sensorimotor:[9,0,0,"-"],transfer:[9,0,0,"-"],utils:[9,0,0,"-"],vision:[12,0,0,"-"]},"salad.models.base":{BaseModel:[9,1,1,""],ConditionalAdaptive:[9,1,1,""]},"salad.models.base.BaseModel":{forward:[9,4,1,""]},"salad.models.base.ConditionalAdaptive":{forward:[9,4,1,""]},"salad.models.digits":{adv:[11,0,0,"-"],assoc:[11,0,0,"-"],corr:[11,0,0,"-"],dirtt:[11,0,0,"-"],ensemble:[11,0,0,"-"],fan:[11,0,0,"-"]},"salad.models.digits.adv":{AdvModel:[11,1,1,""],Feature:[11,1,1,""],Predictor:[11,1,1,""]},"salad.models.digits.adv.AdvModel":{forward:[11,4,1,""]},"salad.models.digits.adv.Feature":{forward:[11,4,1,""]},"salad.models.digits.adv.Predictor":{forward:[11,4,1,""]},"salad.models.digits.assoc":{FrenchModel:[11,1,1,""],SVHNmodel:[11,1,1,""],conv2d:[11,2,1,""]},"salad.models.digits.assoc.FrenchModel":{forward:[11,4,1,""]},"salad.models.digits.assoc.SVHNmodel":{forward:[11,4,1,""]},"salad.models.digits.corr":{FrenchModel:[11,1,1,""],SVHNmodel:[11,1,1,""],conv2d:[11,2,1,""]},"salad.models.digits.corr.FrenchModel":{forward:[11,4,1,""]},"salad.models.digits.corr.SVHNmodel":{forward:[11,4,1,""]},"salad.models.digits.dirtt":{ConditionalBatchNorm:[11,1,1,""],SVHN_MNIST_Model:[11,1,1,""]},"salad.models.digits.dirtt.ConditionalBatchNorm":{forward:[11,4,1,""],parameters:[11,4,1,""]},"salad.models.digits.dirtt.SVHN_MNIST_Model":{conditional_params:[11,4,1,""],forward:[11,4,1,""],parameters:[11,4,1,""]},"salad.models.digits.ensemble":{ConditionalBatchNorm:[11,1,1,""],SVHN_MNIST_Model:[11,1,1,""]},"salad.models.digits.ensemble.ConditionalBatchNorm":{forward:[11,4,1,""],parameters:[11,4,1,""]},"salad.models.digits.ensemble.SVHN_MNIST_Model":{conditional_params:[11,4,1,""],forward:[11,4,1,""],parameters:[11,4,1,""]},"salad.models.digits.fan":{ConditionalBatchNorm:[11,1,1,""],ConditionalLayer:[11,1,1,""],ConditionalModel:[11,1,1,""],ConditionalSequential:[11,1,1,""],FANModel:[11,1,1,""],FeatureAwareNorm2d:[11,1,1,""]},"salad.models.digits.fan.ConditionalBatchNorm":{forward:[11,4,1,""],parameters:[11,4,1,""]},"salad.models.digits.fan.ConditionalModel":{conditional_params:[11,4,1,""],forward:[11,4,1,""],parameters:[11,4,1,""]},"salad.models.digits.fan.ConditionalSequential":{forward:[11,4,1,""]},"salad.models.digits.fan.FANModel":{forward:[11,4,1,""]},"salad.models.digits.fan.FeatureAwareNorm2d":{forward:[11,4,1,""]},"salad.models.gan":{ConditionalGAN:[9,1,1,""],Discriminator:[9,1,1,""],cat2d:[9,2,1,""],normal_init:[9,2,1,""],to_one_hot:[9,2,1,""]},"salad.models.gan.ConditionalGAN":{forward:[9,4,1,""],weight_init:[9,4,1,""]},"salad.models.gan.Discriminator":{forward:[9,4,1,""],weight_init:[9,4,1,""]},"salad.models.neural":{MonkeyDataLoader:[9,1,1,""],MonkeyDataset:[9,1,1,""]},"salad.models.neural.MonkeyDataLoader":{images_rgb:[9,4,1,""],minibatch:[9,4,1,""],nanarray:[9,4,1,""],next_epoch:[9,4,1,""],test:[9,4,1,""],test_av:[9,4,1,""],train:[9,4,1,""],val:[9,4,1,""]},"salad.models.neural.MonkeyDataset":{path:[9,3,1,""],seed:[9,3,1,""]},"salad.models.resnet":{ResNet:[9,1,1,""],resnet101:[9,2,1,""],resnet152:[9,2,1,""],resnet18:[9,2,1,""],resnet34:[9,2,1,""],resnet50:[9,2,1,""]},"salad.models.resnet.ResNet":{forward:[9,4,1,""],load_pretrained:[9,4,1,""]},"salad.models.utils":{CompressedResnet:[9,1,1,""],FixedBottleneck:[9,1,1,""],FixedResnet:[9,2,1,""],bn2linear:[9,2,1,""],convert_conv_bn:[9,2,1,""],get_affine:[9,2,1,""],reinit_bns:[9,2,1,""],replace_bns:[9,2,1,""]},"salad.models.utils.CompressedResnet":{forward:[9,4,1,""]},"salad.models.utils.FixedBottleneck":{forward:[9,4,1,""]},"salad.models.vision":{unet:[12,0,0,"-"]},"salad.models.vision.unet":{UNet:[12,1,1,""],double_conv:[12,1,1,""],down:[12,1,1,""],inconv:[12,1,1,""],outconv:[12,1,1,""],up:[12,1,1,""]},"salad.models.vision.unet.UNet":{forward:[12,4,1,""],get_n_params:[12,4,1,""]},"salad.models.vision.unet.double_conv":{forward:[12,4,1,""]},"salad.models.vision.unet.down":{forward:[12,4,1,""]},"salad.models.vision.unet.inconv":{forward:[12,4,1,""]},"salad.models.vision.unet.outconv":{forward:[12,4,1,""]},"salad.models.vision.unet.up":{forward:[12,4,1,""]},"salad.optim":{DelayedWeight:[2,1,1,""],JointOptimizer:[2,1,1,""],WeightEMA:[2,1,1,""]},"salad.optim.DelayedWeight":{step:[2,4,1,""],zero_grad:[2,4,1,""]},"salad.optim.JointOptimizer":{step:[2,4,1,""],zero_grad:[2,4,1,""]},"salad.optim.WeightEMA":{step:[2,4,1,""],zero_grad:[2,4,1,""]},"salad.solver":{base:[13,0,0,"-"],classification:[13,0,0,"-"],da:[14,0,0,"-"],gan:[13,0,0,"-"],openset:[13,0,0,"-"]},"salad.solver.base":{EventBasedSolver:[13,1,1,""],Solver:[13,1,1,""],StructuredInit:[13,1,1,""]},"salad.solver.base.EventBasedSolver":{finish_batch:[13,4,1,""],finish_epoch:[13,4,1,""],start_batch:[13,4,1,""],start_epoch:[13,4,1,""]},"salad.solver.base.Solver":{compute_loss_dict:[13,4,1,""],cuda:[13,4,1,""],format_summary_report:[13,4,1,""],format_train_report:[13,4,1,""],optimize:[13,4,1,""],register_loss:[13,4,1,""],register_model:[13,4,1,""],register_optimizer:[13,4,1,""],remove_loss:[13,4,1,""]},"salad.solver.classification":{BCESolver:[13,1,1,""],BaseClassSolver:[13,1,1,""],ClassificationLoss:[13,1,1,""],FinetuneSolver:[13,1,1,""],MultiDomainClassificationLoss:[13,1,1,""],MultidomainBCESolver:[13,1,1,""]},"salad.solver.da":{advdrop:[14,0,0,"-"],advdrop_refactor:[14,0,0,"-"],association:[14,0,0,"-"],base:[14,0,0,"-"],coral:[14,0,0,"-"],crossgrad:[14,0,0,"-"],dann:[14,0,0,"-"],dirtt:[14,0,0,"-"],dirtt_re:[14,0,0,"-"],djdot:[14,0,0,"-"],ensembling:[14,0,0,"-"]},"salad.solver.da.advdrop":{AdversarialDropoutLoss:[14,1,1,""],AdversarialDropoutSolver:[14,1,1,""],SymmetricKL:[14,1,1,""],pack:[14,2,1,""],unpack:[14,2,1,""]},"salad.solver.da.advdrop.AdversarialDropoutLoss":{step1:[14,4,1,""],step2:[14,4,1,""],step3:[14,4,1,""]},"salad.solver.da.advdrop.SymmetricKL":{forward:[14,4,1,""]},"salad.solver.da.advdrop_refactor":{AdversarialDropoutLoss:[14,1,1,""],AdversarialDropoutSolver:[14,1,1,""],SymmetricKL:[14,1,1,""]},"salad.solver.da.advdrop_refactor.AdversarialDropoutLoss":{step1:[14,4,1,""],step2:[14,4,1,""],step3:[14,4,1,""]},"salad.solver.da.advdrop_refactor.SymmetricKL":{forward:[14,4,1,""]},"salad.solver.da.association":{AssociationLoss:[14,1,1,""],AssociativeSolver:[14,1,1,""]},"salad.solver.da.base":{DABaseSolver:[14,1,1,""],DATeacher:[14,1,1,""]},"salad.solver.da.coral":{CentroidDistanceLossSolver:[14,1,1,""],CentroidLoss:[14,1,1,""],CorrDistanceSolver:[14,1,1,""],CorrelationDistanceLoss:[14,1,1,""],CorrelationDistanceSolver:[14,1,1,""],DeepCoralSolver:[14,1,1,""],DeepLogCoralSolver:[14,1,1,""]},"salad.solver.da.crossgrad":{CrossGradLoss:[14,1,1,""],CrossGradSolver:[14,1,1,""],Model:[14,1,1,""],MultiDomainModule:[14,1,1,""],concat:[14,2,1,""],conv2d:[14,2,1,""],features:[14,2,1,""],get_dataset:[14,2,1,""]},"salad.solver.da.crossgrad.CrossGradLoss":{pertub:[14,4,1,""]},"salad.solver.da.crossgrad.Model":{forward:[14,4,1,""],forward_domain:[14,4,1,""],parameters_classifier:[14,4,1,""],parameters_domain:[14,4,1,""]},"salad.solver.da.crossgrad.MultiDomainModule":{forward:[14,4,1,""],forward_domain:[14,4,1,""],parameters_classifier:[14,4,1,""],parameters_domain:[14,4,1,""]},"salad.solver.da.dann":{AdversarialLoss:[14,1,1,""],DANNSolver:[14,1,1,""]},"salad.solver.da.dirtt":{DIRTT:[14,1,1,""],DIRTTSolver:[14,1,1,""],VADA:[14,1,1,""],VADASolver:[14,1,1,""]},"salad.solver.da.dirtt_re":{DIRTT:[14,1,1,""],DIRTTSolver:[14,1,1,""]},"salad.solver.da.djdot":{DJDOTSolver:[14,1,1,""]},"salad.solver.da.djdot.DJDOTSolver":{derive_losses:[14,4,1,""]},"salad.solver.da.ensembling":{EnsemblingLoss:[14,1,1,""],SelfEnsemblingSolver:[14,1,1,""]},"salad.solver.gan":{CGANLoss:[13,1,1,""],ConditionalGANSolver:[13,1,1,""],GANSolver:[13,1,1,""]},"salad.solver.gan.CGANLoss":{derive_losses:[13,4,1,""]},"salad.solver.gan.ConditionalGANSolver":{format_train_report:[13,4,1,""],n_classes:[13,3,1,""],names:[13,3,1,""]},"salad.solver.openset":{BaseOpensetSolver:[13,1,1,""],VADAOpenset:[13,1,1,""]},"salad.structural":{CompressedResnet:[2,1,1,""],FixedBottleneck:[2,1,1,""],FixedResnet:[2,2,1,""],bn2linear:[2,2,1,""],convert_conv_bn:[2,2,1,""],get_affine:[2,2,1,""],reinit_bns:[2,2,1,""],replace_bns:[2,2,1,""]},"salad.structural.CompressedResnet":{forward:[2,4,1,""]},"salad.structural.FixedBottleneck":{forward:[2,4,1,""]},"salad.utils":{augment:[15,0,0,"-"],base:[15,0,0,"-"],config:[15,0,0,"-"],evaluate:[15,0,0,"-"],finetune:[15,0,0,"-"]},"salad.utils.augment":{AffineTransformer:[15,1,1,""],RandomAffines:[15,1,1,""]},"salad.utils.augment.AffineTransformer":{affine:[15,4,1,""],invert_affine:[15,4,1,""],stn:[15,4,1,""]},"salad.utils.augment.RandomAffines":{compose:[15,4,1,""],identify:[15,4,1,""],matmul:[15,4,1,""],reflect:[15,4,1,""],rotated:[15,4,1,""],scaled:[15,4,1,""],shear:[15,4,1,""],shift:[15,4,1,""]},"salad.utils.base":{load_or_create:[15,2,1,""],panelize:[15,2,1,""]},"salad.utils.config":{BaseConfig:[15,1,1,""],DomainAdaptConfig:[15,1,1,""]},"salad.utils.config.BaseConfig":{print_config:[15,4,1,""]},"salad.utils.evaluate":{evaluate:[15,2,1,""]},"salad.utils.finetune":{FinetuneSolver:[15,1,1,""],Loss:[15,1,1,""]},salad:{datasets:[3,0,0,"-"],layers:[8,0,0,"-"],models:[9,0,0,"-"],optim:[2,0,0,"-"],solver:[13,0,0,"-"],structural:[2,0,0,"-"],utils:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:attribute","4":"py:method"},terms:{"20l":11,"2x2":6,"2x3":6,"32x32x3":11,"abstract":13,"case":[0,18],"class":[0,2,4,5,6,7,8,9,11,12,13,14,15,18],"default":8,"float":13,"function":[2,5,8,9,11,12,13,14,21],"h\u00e4usser":14,"import":[0,18],"int":[13,14],"long":[0,18],"new":[0,13,18,19,20],"public":[7,11,19,20],"return":[3,5,6,9,11,13,19,20],"static":19,"super":[0,13,18],"true":[4,5,6,7,8,9,11,12,13,14],"while":[2,8,9,11,12,13,14],C_s:14,For:[0,18,19,20],ILS:[19,20],One:[19,20],The:[0,13,14,18,19,20],There:[19,20],Useful:13,Using:[19,20],With:14,__init__:[0,13,18],_basedataset:5,_init_loss:[0,13,18],_init_model:13,_init_optim:[0,13,18],abl:[0,18],about:[13,14,16],abs:14,accept:[19,20],access:[3,4,9],accuraci:[8,19,20],accuracyscor:8,across:[0,2,8,18,19,20],act:[11,14],action:[19,20],activ:[0,18],ada:16,adabn:[19,20],adam:[0,18],adapt:[2,3,4,5,7,8,11,14],add:[6,13],adda:[16,19,20],added:14,addit:[4,13],adr_da:[0,18],adv:[2,9],advdrop:[2,13],advdrop_refactor:[2,13],adversari:[0,8,13,14,18],adversarialdropoutloss:14,adversarialdropoutsolv:[0,14,18],adversarialloss:[13,14],advis:14,advmodel:11,aeroplan:7,affin:15,affine_std:6,affineinvari:8,affineinvariantdiverg:8,affinetransform:15,after:[13,19,20],afterward:[2,8,9,11,12,14],again:5,aggreg:14,aid:[19,20],aim:[13,14],algorithm:[0,13,14,18,19,20],align:[14,19,20],all:[2,8,9,11,12,13,14,19,20],along:[0,18],alpha:2,alreadi:5,also:[0,13,18,19],although:[2,8,9,11,12,14],alwai:19,amadeu:9,amazon:[19,20],analysi:[19,20],anger:[19,20],angl:[4,6],ani:[5,13],annot:[19,20],anoth:[19,20],apach:5,api:18,apple2orang:[19,20],appli:[6,8],applic:11,approach:[0,14,18],architectur:[11,19,20],arg:[4,9,11,13,14,15],argpars:15,argument:[13,14,15],argumentpars:15,around:[4,6],arrai:6,art:[0,16,18,19,20],arthur:19,articl:[19,20],artix41:[0,18,19],arxiv:[0,8,14,18,19,20],assoc:[2,9],associ:[0,2,13,18,19,20],associationloss:14,associationmatrix:8,associativeloss:8,associativesolv:[0,14,18],assum:[6,8],assumpt:13,astound:[19,20],attribut:[19,20],audio:[2,9],aug_loss_func:8,augcgan:[19,20],augment:[2,4,6,7,8,19,20],augment_pair:6,augmentationdataset:4,augmentationload:4,augmentationloss:8,autoalign2d:8,autom:[19,20],avail:[0,4,14,15,18,19,20],averag:[0,2,18],avoid:14,awar:[11,19,20],awesom:[0,16,18],back:[19,20],backbon:[2,9],backend:2,background:[13,21],balanc:8,base:[0,2,3,6,7,11,12,18,19,20],baseclasssolv:[13,14,15],baseconfig:15,baselin:[19,20],basemodel:9,baseopensetsolv:13,basic:15,batch:[2,4,6,9,13,14,15,19,20],batch_siz:[5,7,9,14],batchnorm2d:[8,11],batchnorm:[8,11],bcesolv:13,befor:[19,20],being:[0,13,16,18],benchmark:[3,4,18,19,20],bethg:[0,9,18],bethgelab:[0,18],better:[19,20],between:[0,13,14,18,19,20],bicycl:7,bicyclegan:[19,20],bilinear:12,binarycrossentropi:14,blob:[5,7],block:9,blur_rang:6,bn2linear:[2,9],bn_func:11,bodi:[19,20],bold:[19,20],book:[19,20],bookmark:19,bool:[5,9,13],borrow:[0,18],both:14,britefuri:[0,2,8,18],build:14,build_dataset:7,build_valid:7,bus:7,c_t:14,cadena:9,call:[2,5,8,9,11,12,13,14],callabl:[5,13],caltech:[19,20],camera:[19,20],can:[0,13,18,19,20],car:7,care:[2,8,9,11,12,14],cat2d:9,cat:[3,4],cat_nx2x3:6,categori:[19,20],ccsa:[19,20],celeba:[19,20],celebr:[19,20],centr:6,centre_xf:6,centroiddistancelosssolv:14,centroidloss:14,certain:14,ceta:[16,19,20],cezanne2photo:[19,20],cgan:13,cganloss:13,challeng:16,channel:12,character:13,characterist:[19,20],checkpoint:[13,15],choic:13,chosen:[0,18],cifar:[0,18],cityscap:[19,20],classbalanceloss:8,classif:[2,5,14,15,16,19,20],classifc:13,classifi:[13,14,19,20],classificationloss:13,clean_transform:6,clipart:[19,20],cnn:[19,20],coco:7,code:[0,5,18],coga:[16,19,20],cogan:[19,20],collabor:19,collat:4,collate_fn:4,collect:[4,11,19,20],color:[19,20],colorconstancydataset:4,com:[0,2,5,7,8,11,16,18,19],combogan:[19,20],come:[0,13,18],common:[0,18,19,20],compar:[0,18],comparison:[0,18,19,20],competit:16,compos:15,comprehens:[19,20],compressedresnet:[2,9],compris:[0,18],comput:[2,8,9,11,12,13,14],compute_loss_dict:13,concat:[6,8,14],concat_col:4,concern:13,condit:[8,9,13,19,20],conditional_param:11,conditionaladapt:9,conditionalbatchnorm:11,conditionalentropi:8,conditionalgan:9,conditionalgansolv:13,conditionallay:11,conditionalmodel:11,conditionalparammodel:9,conditionalsequenti:11,confidence_threshold:8,config:2,configur:[13,15],consecut:13,consid:19,consist:[3,19,20],constraint:[19,20],construct:[0,6,9,13,16,18,19,21],constructin:13,constructor:13,contain:[3,13,15,16,19],contempt:[19,20],contest:[19,20],contrast:14,contribut:13,conv2d:[11,14],conv:[2,9,12],convert_conv_bn:[2,9],convert_datalist_gt_to_pkl:7,convolut:[19,20],cool:[19,20],coordshuffl:7,coral:[2,13,19,20],coralloss:8,corr:[2,9],corr_dist:14,corrdistancesolv:14,correct:13,correl:[8,14,19,20],correlatin:14,correlationdist:8,correlationdistanceloss:14,correlationdistancesolv:14,correspond:[19,20],could:14,coupl:[19,20],cov:8,covari:[8,19,20],cpu:13,creat:[5,19,20],crop:9,cross:[0,8,14,18,19,20],crossentropi:14,crossentropysolv:13,crossgrad:[0,2,13,18],crossgradloss:14,crossgradsolv:[0,14,18],cuda:13,current:[0,3,6,13,14,16,17,18,19,20,21],cut:[0,18],cv2017:16,cv2018:16,cvc:16,cvpr:14,cyc:[19,20],cyca:[16,19,20],cycada:[19,20],cycl:[19,20],cyclegan:[19,20],cyclic:[19,20],d_cl:13,d_con:13,d_gan:13,daa:[16,19,20],daassoc:[19,20],dabasesolv:14,dan:[19,20],danc:[19,20],dann:[2,13,16,19,20],dannsolv:[0,14,18],daptiv:[0,18],data:[3,4,5,7,9,11,13,19,20],data_load:[3,15],dataload:[3,13],dataset:[0,2,9,13,14,16,18],dataset_nam:4,date:[19,20],dateach:14,deep:[0,8,13,14,15,16,18],deepcoralsolv:14,deepjdot:[19,20],deeplogcoralsolv:14,def:[0,18],defin:[0,2,8,9,11,12,13,14,18],delayedweight:2,depth:[19,20],deriv:[13,14],derive_loss:[13,14],descent:13,describ:[19,20],descript:15,design:[13,21],detect:[0,2,3,16,18,19,20],determin:8,develop:[0,18],devic:13,diat:[19,20],dictionari:13,differ:[3,13,14,15,19,20],digit:[0,2,3,9,18],digitsload:4,dimens:8,direct:[19,20],directli:13,directori:[5,13],dirt:[0,16,18,19,20],dirtt:[2,9,13],dirtt_r:[2,13],dirttsolv:[0,14,18],discogan:[19,20],discov:[19,20],discoveri:[19,20],discrimin:[9,14,19,20],disentangl:[19,20],disgust:[19,20],displai:13,distanc:[8,14,19,20],distancegan:[19,20],distribut:[19,20],diverg:8,djdot:[2,13],djdotsolv:[0,14,18],document:[19,20],domain:[2,3,4,5,6,8,9,11,13,14,15],domainadapt:[0,5,18],domainadaptconfig:15,domainconfus:6,domainlabel:6,don:[19,20],double_conv:12,down:12,download:[4,5],downsampl:[2,9],drcn:[16,19,20],dropout:[0,14,18],dryrun:13,dslr:[19,20],dsn:[16,19,20],dtn:[16,19,20],dual:[19,20],dualgan:[19,20],dupgan:[19,20],duplex:[19,20],dure:13,dvd:[19,20],each:[2,9,13,14,16,19,20],earn:[0,18],easi:[19,20],easili:[0,15,18],eccv:16,ecml:[19,20],edges2handbag:[19,20],edges2sho:[19,20],edu:5,effici:[19,20],either:13,electron:[19,20],elemstatlearn:5,email:[19,20],emi:[0,18],emot:[19,20],emploi:14,empti:13,encod:7,end:14,ensembl:[0,2,3,8,9,13,18],ensemblingloss:14,ensur:14,entropi:[8,14],epoch:13,eps:[4,8,14],especi:[0,18],establish:3,estim:[8,14,19,20],euclid:8,evalu:2,event:[19,20],eventbasedsolv:13,everi:[2,8,9,11,12,14],everybodi:[19,20],exampl:[0,11,13,18,19,20],excel:[0,18],exectu:13,exist:5,exp:14,expand:[4,8,14],experi:[3,4,13,14,15],expliclict:5,exploit:13,exponenti:[0,2,14,18],extend:[0,18],extens:[13,19],extract_images_label:5,extractor:13,extrat:14,eyes:[19,20],facad:[19,20],face:[19,20],facial:[19,20],fada:[19,20],fair:[0,18],fals:[4,6,8,9,13],fan:[2,9],fanmodel:11,far:[19,20],fear:[19,20],featur:[0,11,13,14,18],featureawarenorm2d:11,featureawarenorm:8,field:[19,20],file:15,filenam:5,filter:[19,20],fine:13,finetun:[2,13],finetunesolv:[13,15],finish_batch:13,finish_epoch:13,first:[8,13],fix:14,fixedbottleneck:[2,9],fixedresnet:[2,9],flexibl:13,flip_i:15,flip_x:15,floattensor:11,flow:[19,20],focus:[19,20],focuss:3,follow:[0,13,18],forcomput:[19,20],forget:[19,20],form:3,format_summary_report:13,format_train_report:13,former:[2,8,9,11,12,14],forward:[2,8,9,11,12,14],forward_domain:14,found:[0,18],four:[4,19,20],frac:14,french:11,frenchmodel:11,from:[0,2,5,7,8,9,14,18,19,20],frontier:[19,20],frustratingli:[19,20],full:[13,19,20],fulli:13,func:[2,13],gan:[0,2,18,19,20],gansolv:13,gaussian:[4,6],gaussian_noise_std:6,gaze:[19,20],gender:[19,20],gener:[0,2,3,6,13,18],gent:[16,19,20],gentoadapt:[19,20],geodes:[19,20],geometri:[19,20],get_affin:[2,9],get_balanced_load:7,get_class_count:7,get_data:5,get_dataset:14,get_n_param:12,get_unbalanced_load:7,getdata:8,getitem:5,gfk:[19,20],git:[0,18],github:[0,2,5,7,8,11,18,19],given:[5,6,13,14,19,20],goal:[0,13,18],goe:13,good:[19,20],googl:16,gpascualg:[0,18],gpfs01:9,gpu:13,grad:13,grad_loss:13,gradient:[0,13,14,18],grain:[19,20],graph:13,grate:[0,18],gtsrb:[19,20],guid:[19,20],haeusser:[0,5,11,18],hair:[19,20],handl:3,happi:[19,20],hausser:[8,14],have:[13,19,20],helper:[2,13],hesit:[19,20],hflip:6,high:[19,20],higher:[19,20],hightolowgaussian:4,hightolowsaltpepp:4,hilbert:[19,20],histori:13,home:[9,16,19,20],hook:[2,8,9,11,12,14],hors:7,horse2zebra:[19,20],how:13,hsvh:[16,19,20],html:[0,5,18],http:[0,2,5,7,8,11,14,16,18,19],i2i:[16,19,20],iccv:16,iclr:14,icubworld:[0,18],id2label:7,ident:[6,11,19,20],identifi:[15,19,20],identity_xf:6,ignor:[2,8,9,11,12,14],im_siz:7,imag:[0,5,6,9,12,18],image_shap:5,imageaugment:6,imagenet:[0,9,13,18,19,20],images_rgb:9,img:15,img_siz:[4,6],implement:[0,3,13,14,18],improv:[19,20],in_ch:12,in_x:11,in_z:11,inbox:[19,20],inconv:12,indic:[19,20],inform:[19,20],init_func:[4,15],initi:13,inp:14,input:[8,9,15,19,20],insid:[19,20],inspir:[0,18],instanc:[2,8,9,11,12,13,14,19,20],instead:[2,8,9,11,12,13,14],int_d:14,intens_flip:6,intens_offset_range_low:6,intens_offset_range_upp:6,intens_scale_range_low:6,intens_scale_range_upp:6,interest:[19,20],intermedi:6,intern:13,internet:5,inv_nx2x2:6,inv_nx2x3:6,invari:[19,20],invers:[6,15],invert:[6,15],invert_affin:15,invertcontrast:6,issu:[0,14,18],iter:[11,13],its:13,jan:[19,20],jcpot:[19,20],jdot:[16,19,20],jeffrei:8,jeffreydiverg:8,jmlr:[0,18],joint:[0,4,14,18,19,20],joint_transform:7,jointdataset:4,jointli:14,jointload:4,jointoptim:2,kei:4,kernel:14,keyword:13,kind:[13,19,20],kitchen:[19,20],kldivwithlogit:8,knife:7,know:[19,20],known:5,kwarg:[0,4,7,9,11,13,14,15,18],lab:[0,18],label:[5,6,7,9,14,19,20],label_transform:5,langl:14,lap:[19,20],larg:[14,19,20],latest:[0,18],latter:[2,8,9,11,12,14],layer:[0,2,9,18],lda:[16,19,20],learn:[0,2,13,15,16,18],learning_by_associ:[0,5,11,18],learningr:[13,14],legend:[0,18],let:[19,20],level:[19,20],leverag:[14,19,20],licens:5,linear:[2,9],link:5,list:[0,16,18,20],littl:[13,19,20],load:[3,5,7],load_datalist:7,load_dataset2:4,load_dataset:[4,7],load_noisy_mnist:6,load_or_cr:15,load_pretrain:9,loader:[4,13],local:[19,20],locat:[19,20],log:[8,13,14,15,19,20],logarithm:8,logcoralloss:8,logeuclid:8,logit:8,logits_target:8,loss:[0,8,13,14,15,18],loss_arg:13,loss_func:13,loss_weight:13,lossfunct:13,lowtohighgaussian:4,lowtohighsaltpepp:4,machin:[19,20],mada:[19,20],mai:[19,20],main:3,mainli:[2,19],maintain:[0,18],make:13,make_data:4,man:[19,20],mani:[13,19,20],manipul:[19,20],map:[5,13,19,20],master:[5,7],mat:[2,5],mat_smal:5,math:14,mathbb:2,mathcal:[2,14],matmul:15,matric:[2,6,8,9,15],matrix:[8,15],maxim:14,maxtransform:7,mcae:[19,20],mdan:[19,20],mean:[2,9],meanaccuracyscor:8,meant:2,measur:14,memori:14,merg:[2,9],method:[3,5,13],methodolog:[19,20],metric:[8,19,20],mil:[0,18],min_:14,mind:13,minibatch:9,minim:14,mni:[16,19,20],mnist:[2,3,4,19,20],mnistsolv:[0,18],mode:[3,13],model:[0,2,8,13,14,15,18],modif:14,modul:3,moment:[19,20],monet2photo:[19,20],mong:[19,20],monkeydataload:9,monkeydataset:9,more:19,most:[13,15],mostli:[19,20],motorcycl:7,move:[0,2,13,18],mozilla:[0,18],mpiigaz:[19,20],mseloss:8,mstn:[19,20],multi:4,multichannel:[19,20],multiclass:13,multidomainbcesolv:13,multidomainclassificationloss:13,multidomainload:4,multidomainmodul:14,multimod:[19,20],multipl:[3,13,19,20],multipli:6,multitransform:7,munit:[19,20],must:[19,20],n_aug:7,n_channel:12,n_class:[9,11,12,13,14],n_condit:9,n_dim:9,n_domain:[4,6,11,14],n_epoch:13,n_output:9,n_sampl:[4,7],n_src:7,n_step:13,n_tensor:14,n_tgt:7,nabla_d:14,nabla_i:14,name:[13,19,20],nanarrai:9,natur:[0,13,18],need:[2,8,9,11,12,13,14],nest:13,net:14,network:[13,14,19,20],neural:[2,14,19,20],neutral:[19,20],newsgroup:[19,20],next:[19,20],next_epoch:9,nois:[0,2,3,4,18],noise_aug:4,noisemodel:[4,14],noisi:[2,3,14],noisy_transform:6,non:[13,19,20],none:[4,5,6,7,9,11,13,14],norm:[2,9],norm_lay:11,normal:[11,14,19,20],normal_init:9,normalize_perturb:8,note:13,notic:[19,20],now:[19,20],nprv:[19,20],num_class:9,num_label:5,num_work:[7,14],number:[13,14],numer:8,nyu:[19,20],oada:[16,19,20],obj:13,object:[2,4,5,6,7,9,13,14,15,19,20],off:[19,20],offer:[13,19,20],offic:[19,20],offici:[0,18],omain:[0,18],one:[2,3,8,9,11,12,13,14,19,20],onli:[13,19,20],open:[13,19,20],openreview:14,openset:[0,2,3,16,18],opensetdataset:5,opt:[0,13,18],optim:[0,11,13,14,18],option:[5,13,14],order:[19,20],org:[0,8,14,18],organ:[0,18],origin:[0,9,11,14,18,19,20],other:[0,4,13,14,18],otherwis:5,otloss:8,out_ch:12,outconv:12,output:[5,15],over:11,overrid:13,overridden:[2,8,9,11,12,14],overview:18,own:13,p_t:2,pac:[19,20],pack:14,packag:[0,1,18],page:[16,19,21],pair:[6,19,20],panel:15,paper:[8,14,16,18],param:[2,6,9,11],paramet:[0,5,11,13,14,18],parameters_classifi:14,parameters_domain:14,parametr:[19,20],paramt:13,part:[0,13,14,18],particular:[13,16],partli:5,pass:[0,2,3,8,9,11,12,13,14,18],path:[4,6,7,9,15],patholog:[19,20],pdf:[8,14],pepper:6,perform:[2,8,9,11,12,14,19,20],person:7,pertub:14,pesah:19,phase:[19,20],photo:[0,18,19,20],pil:5,pip:[0,18],pivot:[19,20],pix2pix:[19,20],pix2pixhd:[19,20],pix:[16,19,20],pixel:[19,20],pixelda:[19,20],pkdd:[19,20],pkl:9,plai:[19,20],plant:7,pleas:[19,20],plot:4,point:[19,20],possibl:[3,6,13,14,19,20],practic:[19,20],pre:[0,9,13,18],pred:8,predict:[14,19,20],predictor:11,prepar:21,pretrain:9,primarili:13,princip:3,print:[3,11],print_config:15,prior:13,prob:11,probabl:[6,8,14],problem:13,process:[5,13,14],product:[14,19,20],project:[0,18,19,20],provid:[4,9,13],pst:8,publish:[0,18],pull:[0,18,19,20],put:5,pytorch:[0,2,9,13,14,18],quantum:[19,20],quick:[0,18],quit:[0,18],rac:8,radialgan:[19,20],radian:6,radiu:8,rafd:[19,20],random:[6,14],randomaffin:15,randomcrop:5,rangl:14,rate:13,raw:5,read:[16,18],readm:[0,18],real:[0,18,19,20],real_resp:9,recent:[0,18],recip:[2,8,9,11,12,14],recognit:[19,20],reconstruct:[19,20],recycl:[19,20],recyclegan:[19,20],refer:[5,8,14,19],reflect:15,regist:[2,8,9,11,12,13,14],register_loss:13,register_model:13,register_optim:[0,13,18],registr:12,regular:[0,13,14,18,19,20],regulari:14,reinforc:[19,20],reinit_bn:[2,9],rel:[19,20],relat:[19,20],releas:[0,18],relu:12,remove_loss:13,replac:[2,9],replace_bn:[2,9],repositori:[0,8,18],repres:[19,20],represent:[19,20],reproduc:11,request:[0,18,19,20],requir:[0,14,18],residu:[19,20],resnet101:9,resnet152:9,resnet18:9,resnet34:9,resnet50:9,resnet:2,resolut:[19,20],resourc:[19,20],resp:9,ressourc:[0,18],resul:11,retain:13,retain_graph:13,retarget:[19,20],retro:[19,20],review:[19,20],revisit:[19,20],rget:[16,19,20],riemann:8,riemannian:[19,20],rjwechg0z:14,robust_binary_crossentropi:8,role:[19,20],root:[4,5,7],rot_std:6,rotat:[6,15],rotation_matric:6,rotationload:4,roundtrip:14,routin:[0,13,18],rtn:[19,20],ruishu:[0,18],run:[0,2,8,9,11,12,14,18],s_i:14,s_k:14,sad:[19,20],saito:14,salt:[6,19,20],saltandpepp:[4,6],same:14,sampl:[8,14],santiago:9,save:13,savedir:13,sbad:[16,19,20],sbada:[19,20],scalabl:[19,20],scalar:14,scale:[14,15,19,20],scale_u_rang:6,scale_x_rang:6,scale_y_rang:6,scene:[19,20],schneider:[0,18],script:18,sdasl:[19,20],second:8,section:[0,18],seed:[4,9],self:[0,2,8,11,14,18],selfensemblingsolv:[0,14,18],semant:[19,20],semi:2,semisup:5,sens:13,sensorimotor:2,sentiment:[19,20],separ:[13,19,20],set:[0,5,6,13,18],setup:[0,18],sever:[0,13,18],sgf:[19,20],shape:[6,15],share:[13,19,20],shear:15,shear_i:15,shear_x:15,shelf:[19,20],shift:[6,15,19,20],should:[2,8,9,11,12,13,14],shuffl:[7,14],side:[19,20],sigma:6,sign:[19,20],silent:[2,8,9,11,12,14],sim:[19,20],simgan:[19,20],similar:[3,13,14],similiar:14,simpl:[0,18,19,20],simul:[19,20],sinc:[2,8,9,11,12,14],singl:4,site:16,size:[3,6,11,14,15],skateboard:7,small:3,smcae:[19,20],smooth:[19,20],soc:[16,19,20],solut:[19,20],solver:[2,15],some:13,soon:[0,18],sour:[16,19,20],sourc:[14,16],spam:[19,20],specif:[13,19,20],specifi:[0,13,18],speech:[19,20],split:[4,5],src_param:2,sschneider:9,stabl:8,stable_logdet:8,stack:[3,4,19,20],stackeddataset:14,stai:[17,19,21],standard:[4,14],stanford:5,stargan:[19,20],start:13,start_batch:13,start_epoch:13,state:[0,16,18],statedict:9,statist:[2,9],statweb:5,std:[8,9],ste:[0,18],steffen:[0,18],stein:8,steindiverg:8,step1:14,step2:14,step3:14,step:[2,13,14],stl:[0,18],stn:15,stochast:13,store:[0,6,18],str:13,strategi:[19,20],street:[19,20],string:5,structur:13,structuredinit:13,student:[19,20],style:[0,18],subcategori:[19,20],subclass:[0,2,3,4,8,9,11,12,13,14,18],subfield:[19,20],submiss:[16,19,20],submodul:3,subsampl:9,suffici:14,suggest:[19,20],suitabl:14,sum_:14,sum_c:8,sum_i:8,sum_k:14,summer2wint:[19,20],supervis:[0,2,18],support:15,sure:13,surk:[19,20],surpris:[19,20],surrog:[19,20],svhn:[0,3,4,11,16,18,19,20],svhn_mnist_model:11,svhnmodel:11,symmetr:[14,19,20],symmetrickl:14,syn:[19,20],synt:[16,19,20],synth:[0,2,3,4,18,19,20],synth_test_32x32:5,synth_test_32x32_smal:5,synth_train_32x32:5,synth_train_32x32_smal:5,synthesi:[19,20],synthet:[0,5,18,19,20],synthsmal:5,t_j:14,t_k:14,take:[2,5,8,9,11,12,13,14],taken:[2,19,20],target:[5,14,19,20],target_transform:5,task:[0,18],taskonomi:[19,20],tea_out:8,teacher:[2,14,19,20],technic:21,techniqu:[0,18],tensor:[8,14],test:[2,5,9,13],test_av:9,test_fil:5,tgt:8,thei:[19,20],them:[0,2,8,9,11,12,13,14,18],theme:[19,20],theoret:[19,20],thesi:[0,18],theta:[6,15],thi:[2,3,4,8,9,11,12,13,14,15,16,17,19,20,21],those:6,through:[3,13,19,20],tib:5,tmni:[16,19,20],to_one_hot:9,todo:[0,8,14,18],toi:[2,3],tokyo:[0,18],tool:[3,5,13],toolbox:[0,2,18,21],top:[19,20],torch:[0,2,3,4,7,8,9,11,12,13,14,15,18],torchvis:[3,5],total:[19,20],toward:[19,20],toydatasetload:4,track:[0,18],traffic:[19,20],train:[0,4,5,6,7,8,9,13,14,18,19,20],train_frac:9,train_g:[13,14],train_visda:7,training_fil:5,transfer:[0,2,16,18],transform:[2,3,4,5,7,9,15],transform_list:6,transit:[14,19,20],translat:[0,18],transport:[0,14,18],truck:7,tsvh:[16,19,20],tune:[13,17,21],tupl:[3,5,13],tusp:[16,19,20],two:[3,5,13,14,19,20],txt:[0,18],type:[9,11],types_test:9,types_train:9,typic:11,uab:16,ukiyoe2photo:[19,20],uncertainti:14,under:[0,16,18,19,20,21],unet:[2,9],unifi:[19,20],uniform:6,unit:[16,19,20],unityey:[19,20],unknown:5,unlabel:[19,20],unpack:14,unpair:[19,20],unrestrain:[19,20],unsupervis:[4,14],updat:[13,16,17,21],upon:[0,14,18],url:5,use:[0,5,13,14,18],use_rampup:8,used:[5,11,13,14],useful:[4,19],uses:14,using:[2,14,19,20],usp:[0,2,3,4,16,18,19,20],usual:13,util:[2,3,4,18],v17:[0,18],vada:[0,14,18],vadaopenset:13,vadasolv:[0,14,18],val:9,valu:3,vangogh2photo:[19,20],vari:[19,20],variant:[2,9,13],vat:2,vatloss:8,vector:14,verbos:8,veri:[3,13],version:[0,5,18,19,20],via:[0,18,19,20],vid2vid:[19,20],view:16,virtual:[0,8,14,18],visda:[0,2,3,18,19,20],visda_data_load:7,visda_data_loader_ful:7,visda_data_loader_pseudo:7,visdadetectionload:7,vision:[2,9],visionlearninggroup:7,visit:[0,14,18],visit_weight:[8,14],visitloss:[8,14],visual:[0,2,8,11,14,18,19,20],voic:[0,18],wai:8,walk:14,walker_weight:[8,14],walkerloss:[0,8,14,18],want:13,wasserstein:[19,20],wassersteinloss:8,wdgrl:[19,20],webcam:[19,20],webpag:[0,18],weight:[0,2,13,18],weight_init:9,weightedc:8,weightema:2,welcom:[0,18],when:[0,5,13,18],where:[2,5,6,9,13],which:[7,9,14],white:[0,18],whitepap:18,within:[2,8,9,11,12,14],without:[19,20],word:14,work:[0,5,18],workshop:16,world:[0,18,19,20],would:13,wrapper:[4,5],written:[19,20],x_d:14,x_i:8,x_t:2,x_y:14,xgan:[19,20],xlat_rang:6,y_i:8,y_t:2,yield:11,yield_condit:11,yield_shar:11,you:[13,19,20],your:13,zero:[5,19,20],zero_grad:2,zip:5},titles:["\ud83e\udd57 salad","salad","salad package","salad.datasets package","salad.datasets.da package","salad.datasets.digits package","salad.datasets.transforms package","salad.datasets.visda package","salad.layers package","salad.models package","salad.models.audio package","salad.models.digits package","salad.models.vision package","salad.solver package","salad.solver.da package","salad.utils package","Domain Adaptation Benchmarks","Page under construction","\ud83e\udd57 salad","Transfer Learning and Domain Adaptation Reading List","Awesome Transfer Learning","salad Whitepaper \ud83d\udea7"],titleterms:{"abstract":[0,18],Using:[0,18],adapt:[0,16,18,19,20],adv:11,advdrop:14,advdrop_refactor:14,adversari:[19,20],appli:[19,20],applic:[19,20],approach:[19,20],assoc:11,associ:[8,14],audio:[0,10,18,19,20],augment:15,autoencod:[19,20],awesom:[19,20],base:[4,5,8,9,13,14,15],benchmark:16,blog:[19,20],challeng:[19,20],classif:13,config:15,construct:17,contact:[0,18],content:[19,20],copula:[19,20],coral:[8,14],corr:11,crossgrad:14,dann:14,dataset:[3,4,5,6,7,19,20],deep:[19,20],detect:7,digit:[4,5,6,11,16,19,20],dirtt:[11,14],dirtt_r:14,djdot:14,domain:[0,16,18,19,20],embed:[19,20],ensembl:[6,11,14,19,20],evalu:15,experi:[0,18],extract:[19,20],fan:11,featur:[19,20],few:[19,20],fine:[19,20],finetun:15,func:8,gan:[9,13],gener:[19,20],imag:[19,20],instal:[0,18],kernel:[19,20],latent:[19,20],layer:8,learn:[19,20],librari:[0,18,19,20],list:19,mat:8,medic:[19,20],meta:[19,20],method:[19,20],mnist:[0,5,18],model:[9,10,11,12,19,20],modul:[2,4,5,6,7,8,9,11,12,13,14,15],multi:[19,20],neural:9,neurosci:[0,18],nois:6,noisi:6,open:[0,18],openset:[5,7,13],optim:[2,19,20],other:[19,20],packag:[2,3,4,5,6,7,8,9,10,11,12,13,14,15],page:17,paper:[19,20],physic:[19,20],polici:[19,20],problem:[0,18],process:[19,20],quickstart:[0,18],read:19,reason:[0,18],refer:[0,18],resnet:9,result:[19,20],robot:[19,20],salad:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,21],self:[19,20],semi:[19,20],sensorimotor:9,shot:[19,20],softwar:[0,18],solver:[0,13,14,18],sourc:[0,18,19,20],space:[19,20],structur:2,submodul:[2,4,5,6,7,8,9,11,12,13,14,15],subpackag:[2,3,9,13],subspac:[19,20],supervis:[19,20],survei:[19,20],synth:5,tabl:[19,20],task:[16,19,20],tempor:[19,20],text:[19,20],theori:[19,20],thi:[0,18],toi:4,transfer:[9,19,20],transform:6,translat:[19,20],transport:[19,20],tune:[19,20],tutori:[19,20],under:17,unet:12,unsupervis:[19,20],using:[0,18],usp:5,util:[7,9,15],vat:8,video:[19,20],visda:[7,16],vision:[0,12,18],whitepap:21}})